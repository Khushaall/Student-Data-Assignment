import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [islog, setislog] = useState(true);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function handleNavigate(loc: string) {
    navigate(loc);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const email = EmailRef.current?.value;
    const password = PasswordRef.current?.value;

    try {
      if (!email || !password) return alert("Please enter email and password");

      const res = await signInWithEmailAndPassword(auth, email, password);
      handleNavigate("/dashboard");

    } catch (err: any) {
      alert("Login Failed: " + err.message);
    }
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const email = EmailRef.current?.value;
    const password = PasswordRef.current?.value;

    try {
      if (!email || !password) return alert("Please enter email and password");

      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup success:", res.user);
      setislog(true);

    } catch (err: any) {
      alert("Signup Failed: " + err.message);
    }
  }

  return (
    <>
      <div className="text-4xl font-bold text-center mt-10 text-indigo-600 animate-pulse">
        Welcome !!!
      </div>

      <div className="fixed inset-0 z-40 flex justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex justify-center h-screen z-100 items-center">
          <div className="px-12 rounded-2xl sm:w-[400px] bg-white shadow-lg p-6">
            <div className="flex justify-center mb-5 gap-6">
              <button onClick={() => setislog(false)} className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-lg ${islog ? "" : "bg-indigo-400"}`}>Sign Up</button>
              <button onClick={() => setislog(true)} className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-lg ${islog ? "bg-indigo-400" : ""}`}>Log In</button>
            </div>

            <form className="flex flex-col gap-3">
              <div>
                <label className="block">Email</label>
                <input ref={EmailRef} className="bg-gray-100 w-full rounded-lg px-3 py-2" type="text" placeholder="Email" />
              </div>

              <div>
                <label className="block">Password</label>
                <input ref={PasswordRef} className="bg-gray-100 w-full rounded-lg px-3 py-2" type="password" placeholder="Password" />
              </div>
            </form>

            <div className={`${islog ? "hidden" : ""} flex justify-center mt-4`}>
              <button onClick={handleSignup} className="bg-indigo-500 hover:bg-indigo-600 text-white px-24 py-2 rounded-xl">Signup</button>
            </div>
            <div className={`${islog ? "" : "hidden"} flex justify-center mt-4`}>
              <button onClick={handleLogin} className="bg-indigo-500 hover:bg-indigo-600 text-white px-24 py-2 rounded-xl">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
