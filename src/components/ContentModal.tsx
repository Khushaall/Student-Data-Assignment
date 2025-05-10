import { useRef } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";
import axios from "../api/mockapi";

interface ModalProps {
  Open: boolean;
  refresh?: () => void;
  onClose: () => void;
}

interface InputProps {
  placeholder: string;
  ref?: React.Ref<HTMLInputElement>;
}

function Input({ placeholder, ref }: InputProps) {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      className="px-4 py-2 border-gray-200 rounded border-2 focus:outline-none"
    />
  );
}

export default function ContentModal({ onClose, Open , refresh }: ModalProps) {
  const NameRef = useRef<HTMLInputElement>(null);
  const CourseRef = useRef<HTMLSelectElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);

  async function addStudent() {
    try {
      const response = await axios.post("/students", {
        name: NameRef.current?.value,
        email: EmailRef.current?.value,
        course: CourseRef.current?.value,
      });

      console.log("Student added:", response.data);
      refresh?.();
      onClose();
      // Optionally refetch students or update state locally here
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  }

  return (
    <>
      {Open && (
        <div className="fixed inset-0 z-40 flex justify-center items-center xl:justify-end xl:items-start xl:pt-16 xl:pr-52">
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-50 rounded-md bg-white h-72 shadow-md p-4 flex justify-center flex-col gap-4 w-96">
            <div className="flex justify-between">
              <span className="flex justify-center text-xl">Create Content</span>
              <button
                onClick={onClose}
                className="text-gray-500 cursor-pointer hover:text-black"
              >
                <CrossIcon size="lg" />
              </button>
            </div>
            <Input ref={NameRef} placeholder="Student Name" />
            <Input ref={EmailRef} placeholder="Email" />
            <select
              name="course"
              ref={CourseRef}
              className="border-gray-300 border-2 rounded p-2"
            >
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="IT">IT</option>
              <option value="Arch">B.Arch</option>
            </select>
            <div className="flex justify-center">
              <Button text="Submit" size="lg" type="primary" onClick={addStudent} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
