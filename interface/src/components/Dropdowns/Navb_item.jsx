'use client'
import React, { useState } from 'react';
import styles from './Dropdown.css'
import GPUdown from './GPUDrop'
import Square from './Square'
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/lib/firebase";


import { useEffect } from 'react';

export default function ItemNav () {
    const [mode,setMode]=useState(false)
    const [text,setText]=useState('')
    const [logged,setLogged]=useState(false)
    useEffect(()=>{
      const app=initializeApp(firebaseConfig);
      const auth = getAuth(app);
    onAuthStateChanged(auth,(user) => {
        if (!user) {
            console.log("noooooooooooo  "+text);
            
        } else {
          setText('Logout');
          setLogged(true)
          console.log("yessssssssssssssss  "+text);
        }
    } )
    },[])

  return <>
  {
    logged?<>
    <div  style={{display:"flex",gap:"20vh",background:"none",marginBottom:"5vh",marginTop:"7vh"}} >
    <div className='square' onClick={()=>{setMode(true);setText('GPU')}}>
    <div className="inner" style={{padding:"1vh",color:"black",fontSize:"40px"}}>GPU</div>
    </div>
  <div className='square'  onClick={()=>{setMode(true);setText('Ipad')}}>
  <div className="inner" style={{padding:"1vh",color:"black",fontSize:"40px"}}>Ipad</div>
  </div>
  <div className='square'  onClick={()=>{setMode(true);setText('CPU')}}>
  <div className="inner" style={{padding:"1vh",color:"black",fontSize:"40px"}}>CPU</div>
  </div>
  <div className='square'  onClick={()=>{setMode(true);setText('Speaker')}}>
  <div className="inner" style={{padding:"1vh",color:"black",fontSize:"40px"}}>Speaker</div>
  </div>
  <div className='square'  onClick={()=>{setMode(true);setText('Msc')}}>
  <div className="inner" style={{padding:"1vh",color:"black",fontSize:"40px"}}>Msc</div>
  </div>
</div>
<Square text={text} key={mode} mode={mode}></Square>
</>
    :<><div style={{minHeight:"75vh",minWidth:"200vh",display:'flex',justifyContent:"center",alignItems:"center",fontSize:"40px"}}>Log In to Avail Service</div></>
  }
   </>
};

