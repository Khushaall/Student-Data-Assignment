import { useState } from "react";
import { Button } from "../components/Button";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import PlusIcon from "../icons/PlusIcon";
import ContentModal from "../components/ContentModal";
import UseContent from "../hooks/UseContent";
import MenuIcon from "../icons/MenuIcon";
import CrossIcon from "../icons/CrossIcon";


export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const { students, loading, refresh } = UseContent();
  const [sidebar,setSidebar]=useState(false);
  const [course, setCourse] = useState("");
  const filtered = course ? students.filter(s => s.course === course) : students;

  function handleModal() {
    setOpen(true);
  }

  return (
    <>
      <ContentModal Open={open} onClose={() => {
        setOpen(false)
      }} refresh={refresh} />

      <Navbar setSidebar={setSidebar} setOpen={setOpen} setCourse={setCourse} sidebar={sidebar}/>

      <div className="bg-[#eeeeef] max-w-screen justify-center min-h-screen md:ml-72">

        <div className="z-30 sticky top-0 h-16 flex justify-between items-center max-w-screen bg-[#eeeeef] shadow-sm p-8">
        
        <button onClick={()=>{setSidebar(true)}} className={`${sidebar?"hidden":""} pt-4 boder-1 border-gray-500 p-2 fixed top-0 left-0 z-50 cursor-pointer`}>
        <MenuIcon size="lg" />
        </button>

        

        <div className={`pl-4 ${sidebar ? "ml-66":""}`}>

          Student Dashboard
        </div>
          <div className="hidden md:block">

            <Button text="Add Student" type="primary" startIcon={<PlusIcon size="md" />} size="lg" onClick={handleModal} />
          </div>
        </div>


        <div className="flex gap-4 p-4 pt-8 flex-wrap">
          {loading ? (
            <div className="justify-center items-center text-2xl">
              Loading...
            </div>
          ) : (
            filtered.map((s) => (
              <Card key={s.id} name={s.name} course={s.course} />
            ))
          )}
        </div>


      </div>

    </>
  )
}