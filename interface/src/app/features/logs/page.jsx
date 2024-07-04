
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Navbar from '@/components/Navbar'
import Features from "@/components/OurFeatures";
import Foot from "@/components/Footer";
import 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import Back from "./Splines";
import Spl from "@/components/Spline";


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
     <p  style={{fontSize:"45px",color:"black",marginTop:"5vh"}}>Enter Item Data</p>
     <div className="form__group field ">
   <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
   <label for="name" class="form__label">Name</label>
    </div>
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