

import styles from './Dropdown.css'
export default function GPUdown({mode,text}){
    var backup='';
    var a=[]
    const features=['manufacturer', 'productName','Bus-memSize  ','mem-BusWidth','gpuClock',
'memClock','unifiedShader',	'tmurop','pixelShader','vertexShader','igp','bus','memType','gpuChip']

    for(var i=1;i<features.length+1;i++){
        var param=i.toString()
        console.log(i)
        var param_content=param+'-content'
        if(i>=2&&i<=4)
        {
        a.push(
    <div key={i}>
    <div  style={{display:"flex",flexDirection:"row",justifyItems:"center",gap:"10vh"}}>
        <label style={{paddingTop:"2vh",fontWeight:"bolder",fontSize:"30px",color:"blue",minWidth:"600x"}}>{features[i-1]}</label>
        <div className="dropdown">
      <button className="dropbtn" id={param}>none</button>
      <div class="dropdown-content" id={param_content}>
        <a className={param}>select above option first</a>
      </div>
    </div>
    </div>
    </div>
        )
    }
    }

function setter(id,parameter){

    const t= setValues(id,parameter)
}
async function setValues(id,parameter){
    const ids=id
    const p=document.getElementById(`${parameter}`)
    const c=document.getElementById(`${parameter}-content`)
    c.innerHTML=''
    var i=0
    const temp=document.createElement('a')
    temp.className=`${parameter}`
    temp.textContent='None'
    temp.addEventListener('click',()=>{
        document.getElementById(parameter).textContent=temp.textContent
        setter(temp.textContent,parameter+1)
     })
    c.appendChild(temp)
  if(parameter<=2){
    console.log(id+'  ::::  '+options[parameter-2][ids]+ "   LL  "+parameter)
   for(var a=0;a<options[parameter-2][ids].length;a++){
     const temp=document.createElement('a')
     temp.className=`${parameter}`
     temp.textContent=options[parameter-2][ids][a]
     temp.addEventListener('click',()=>{
        document.getElementById(parameter).textContent=temp.textContent
        setter(temp.textContent,parameter+1)
     })
    c.appendChild(temp)
    }
  }
  else{
    console.log(id+'  ::::  '+options[parameter-2]+ "   LL  "+parameter)
    for(var a=0;a<options[parameter-2].length;a++){
      const temp=document.createElement('a')
      temp.className=`${parameter}`
      temp.textContent=options[parameter-2][a]
      temp.addEventListener('click',()=>{
         document.getElementById(parameter).textContent=temp.textContent
         setter(temp.textContent,parameter+1)
      })
      c.appendChild(temp)
  }
}
}
const gpuModels={'nvidia':[
'GeForce GT 1010',
'GeForce GT 1010 DDR4',
'GeForce RTX 2050 Mobile',
'GeForce RTX 2060 12 GB',
'GeForce RTX 3050 Mobile',
'GeForce RTX 3050 Ti Mobile',
'GeForce RTX 3050 Ti Mobile',
'GeForce RTX 3060',
'GeForce RTX 3060 GA104',
'GeForce RTX 3060 Max-Q',
'GeForce RTX 3060 Mobile',
'GeForce RTX 3070 Max-Q',
'GeForce RTX 3070 Mobile',
'GeForce RTX 3070 Ti',
'GeForce RTX 3080 Max-Q',
'GeForce RTX 3080 Mobile',
'GeForce RTX 3080 Ti',
],
'intel':[
'Arc A350M',
'Arc A370M',
'Arc A380',
'Arc A550M',
'Arc A730M',
'Arc A770'

]}
async function submit(){
    const keys=[]
    const weights=
    {
    'Manufacturer':{'nvidia':1,'intel':0,'amd':3},
    'GPU':{'geforce':11,'arc':5,'iris':6,'radeon':2,'rtx':30,'mobile':201,'gt':10}
    }
const first=document.getElementById('first').textContent
//nivdia intel or amd
keys.push(weights['Manufacturer'][first])
var tempM=[]
for(var i=2;i<=15;i++){
    //after properly slicing shoud be pushed
    //const temp=document.getElementById(i).textContent
    //tempM.push(temp)
}
//for test cse we pass input_data otherwise 
var a=randomNumber(75000,120000)
var b=randomNumber(1500,2500)
var c=randomNumber(2000,11000)
var d=randomNumber(25000,90000)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
const input_data = [1,a,2023,8,128,1925,b,c,120,48,2,1,0,406,1506,d];
const data=await PredS(input_data)
const main=document.getElementById('main')
backup=main.innerHTML
main.innerHTML=''
const div=document.createElement('div')
const but=document.createElement('button')
but.textContent='Go Back'
but.className='Back'
but.addEventListener('click',()=>{
  main.innerHTML=backup;
  const a=document.getElementById('submit')
  console.log(a+'        trsssssssssssssssssssssst')
  a.addEventListener('click',submit)
  backup=''
})
div.textContent='Stocks Predicted by AL: '+JSON.stringify(data)
div.className='prediction'
main.appendChild(div)
main.appendChild(but)
}
async function PredS(input_data){
  const data=await  fetch('http://localhost:5000/api/user', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'content-type':'application/json'
    },
     
  })
  const Value=await data.json();
  console.log("checking :: ",Value)
  return Value
  }
  

const mems=[2,4,8,16,32]
const third=[23,43,543,23,43]
const  options=[gpuModels,mems,third]





if(mode)

return<div id='main'  style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"5vh"}}>
<div id='main' style={{display:"flex",flexDirection:"row",justifyItems:"center",gap:"10vh"}}>
<label style={{paddingTop:"2vh",fontWeight:"bolder",fontSize:"30px",color:"blue"}}>{features[0]}</label>
<div className="dropdown">
<button className="dropbtn" id='first'>Options</button>
<div class="dropdown-content" id='first-content'>
<a className='first' id='intel' onClick={(event)=>{document.getElementById('first').textContent=event.target.id;setter(event.target.id,2)}} >INTEL</a>
<a className='first' id='nvidia' onClick={(event)=>{document.getElementById('first').textContent=event.target.id;setter(event.target.id,2)}} >NVIDIA</a>
<a className='first' id='amd' onClick={(event)=>{document.getElementById('first').textContent=event.target.id;setter(event.target.id,2)}} >AMD</a>
</div>
</div>
</div>
{a}
<button id='submit' onClick={submit} style={{marginBottom:"10vh"}}  ><p>Predict</p></button>
</div>
else
return <p id='choice'>Make A Choice</p>
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}