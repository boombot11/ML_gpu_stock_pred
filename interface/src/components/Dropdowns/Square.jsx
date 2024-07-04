import GPUdown from "./GPUDrop";

export default function Square  ({text,mode}){
    return (
      <div  >
     <GPUdown mode={mode} text={text} key={mode} ></GPUdown>
      </div>
    );
  };