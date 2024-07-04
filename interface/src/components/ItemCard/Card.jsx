'use client'
import { redirect } from 'next/dist/server/api-utils'
import styles from './Card.css'
import { useEffect, useState } from 'react'


function View(e){
console.log(e.target.className)
window.location.href='http://localhost:3000'
}

async function maker(str,len){
  const arr=[]
  for(var a=0;a<len;a++){
 arr.push(
  <>
  <div  onClick={View} className='Card' >
<p  ><strong>{str[0+a*9]}</strong></p>
<p  ><strong>{str[8+a*9]}</strong></p>
<p  >GPU</p>
<p  >{str[2+a*9]+'/'+str[3+a*9]+'/'+str[4+a*9]}</p>
<div id='icon'>☰</div>
</div>
  </>
 )
 console.log('DONEEE:::   '+arr)
  }
  return arr
}

export default function Card(){
    const[data,SetData]=useState([])
    const[load,SetLoad]=useState(false)

useEffect(()=>{
    const data=async()=>{
      var data=  await fetch('http://localhost:5000/test', {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'content-type':'application/json'
  },
})
  var result= await data.json()
var str = result['value']+',test';
 str=str.split(/[ ,]+/).filter(Boolean);
 const res=await maker(str,result['length'])
for(var x in str)
  console.log('XDSXASDASXAD::  '+str[x])
 console.log('222222222222222::: '+result['length']+"   :::::::    "+res)
  SetData(res)
  SetLoad(true)
    }
   data()
   //console.log(result['value']+"  ::XXXX")
   
    },[]);
   

return<>{load?
<div className='Card-Container'>
{
  data.map((value,index)=>{
  return  <div key={index}>{value}</div>
  })
}
</div>:<>loading</>
}
</>
}