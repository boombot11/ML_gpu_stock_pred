
'use client'
export default function Features(){

const features=[
    {
      "text":"Check Storage",
      "icon":"✦",
      "placeholder":"Seach the Storage for an Item with a specific ID finding out its precise details",
      "link":"storage",
    },
    {
        "text":"Add/Remove Item",
        "icon":"✦",
        "placeholder":"Add or delete ITEMS along with gaining support from AL for stock prediction",
        "link":"search",
     },
     {
        "text":"Previous Logs",
        "icon":"✦",
        "placeholder":"Check previous History of Warehouse to make well rounded decisions",
        "link":"logs",
     }
]
var arr=[];
for (let i = 0; i < features.length; i++) {
    let x=features[i];
    arr.push(
       <>
        <div class="gradient-cards" onClick={()=>{window.location.href=`http://localhost:3000/features/${x.link}`}}>
    <div class="card">
      <div style={{maxHeight:"415px",maxWidth:"245px",minHeight:"415px",minWidth:"215px"}} class="container-card bg-green-box">
        <div style={{minWidth:"50px",minHeight:"50px"}}></div>
        <p class="card-title">{x.text}</p>
        <p class="card-description">{x.placeholder}</p>
      </div>
    </div>
    </div>
       </>
    )
 }
    return<>
    {
     arr.map((element,index)=>{return <div key={index}>{element}</div>
    })
    }
    </>
}   

