
import Image from "next/image";

import Spl from "@/components/Spline";
import Navbar from '@/components/Navbar'
import Features from "@/components/OurFeatures";
import Foot from "@/components/Footer";
import 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default  async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-blue-200">
     <div style={{minWidth:"2vh"}}></div>
     <Navbar></Navbar>
     <div className="flex flex-row bg-white ml-4 mr-4 " style={{alignItems:"center",maxHeight:"60vh"}}>
      <div className="back" style={{fontSize:"50px",paddingLeft:"12vh",width:"100%",minHeight:"60vh",alignContent:"center",overflow:"hidden"}}>Storage Management</div>
     <Spl></Spl>
     </div>
     <div className="p-4vh" style={{fontSize:"40px",color:"grey"}}>Our Features ↓</div>
     <div className="flex flex-row bg-none border-4 border-grey200 gap-2 Mains">
    <Features></Features>
     </div>
    <Foot></Foot>
    </main>
  );
}
