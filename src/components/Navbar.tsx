import React, { useState } from 'react'
import { Button } from './Button'
import PlusIcon from '../icons/PlusIcon'
import SidebarItems from './SidebarItems';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '../icons/MenuIcon';
import CrossIcon from '../icons/CrossIcon';

function Navbar({setCourse , setOpen,sidebar,setSidebar}) {
    const navigate = useNavigate();

    async function handleLogout(){

        await signOut(auth);
        navigate("/")
    }

    const [selected,setSelected] = useState("Home")
    return (
        <>
        
        <div className={`${sidebar ? "" :"hidden"} h-screen w-72 bg-white rounded-xl md:flex flex-col fixed top-0 left-0 p-4 pr-8 z-50`}>
            <div>
                <div className=' text-2xl '>

                Logo
                </div>
                <button onClick={()=>{setSidebar(false)}} className={`${sidebar? "ml-56":"hidden"} md:hidden pt-4 boder-1 border-gray-500 p-2 fixed top-0 left-0 z-50 cursor-pointer`}>
        <CrossIcon size="lg" />
        </button>



                <div className="flex flex-col gap-4 mt-4 ">
                <SidebarItems active={selected === "Home"} text="Home" onClick={() => { setCourse(""); setSelected("Home");setSidebar(false)  }} />
                <SidebarItems active={selected === "CSE"} text="CSE" onClick={() => { setCourse("CSE"); setSelected("CSE");setSidebar(false)  }} />
                <SidebarItems active={selected === "ECE"}  text="ECE" onClick={() => { setCourse("ECE"); setSelected("ECE");setSidebar(false)  }} />
                <SidebarItems active={selected === "IT"}  text="IT" onClick={() => { setCourse("IT"); setSelected("IT");setSidebar(false)  }} />
                <SidebarItems active={selected === "B.Arch"}  text="B.Arch" onClick={() => { setCourse("Arch"); setSelected("B.Arch");setSidebar(false)  }} />
            </div>
            </div>
            
            <div className='flex flex-col fixed mb-8 bottom-0 gap-4 left -0 '>
                <div className='md:hidden block'>
                    <Button text="Add Student" type="primary" startIcon={<PlusIcon size="md" />} size="lg" onClick={()=>{setOpen(true);setSidebar(false) }} />
                    </div> 
                    <div>

                <Button text='Log out' size='lg' type="danger" onClick={handleLogout} />
                    </div>
            </div>
        </div>
        </>
    )
}

export default Navbar