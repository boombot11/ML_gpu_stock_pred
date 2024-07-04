
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Navbar from '@/components/Navbar'
import Features from "@/components/OurFeatures";
import Foot from "@/components/Footer";
import 'firebase/auth';
import Back from "./Splines";
import Spl from "@/components/Spline";
import ItemNav from "@/components/Dropdowns/Navb_item";
import PredShower from '@/components/pred'
import GPUdown from '@/components/Dropdowns/GPUDrop'
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/lib/firebase";



export default async function Home() {
  return (
         <Wrapper>
          <div style={{position:"fixed",top:"0vh",zIndex:"3",minWidth:"100%"}}>
          <Navbar></Navbar>
          </div>
      <div style={{position:"absolute",zIndex:"0",minWidth:"200vh"}}>
     <Spl></Spl>
     </div>
      <Content>
  
     <div className="flex flex-col gap-3 bg-none ml-4 mr-4 " style={{alignItems:"center",minHeight:"80vh",minWidth:"200vh",overflow:"hidden"}}>
    <div style={{minHeight:"10vh"}}></div>
  <ItemNav></ItemNav>
    </div>
     <Foot></Foot>

      </Content>
    </Wrapper>

  );
}

function Wrapper({children}){
return <>
{children}
</>
}

function Content({children}){
  return <div className="glass" style={{position:"absolute",zIndex:"1",marginTop:"10vh"}}>
  {children}
  </div>
  }