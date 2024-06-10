import { useEffect, useState } from "react"
import "./App.css"


export default function App(){
  const [x,setX]=useState(0);
  let id;
  useEffect(()=>{
    start();
  },[])
  function start(){
    id = setInterval(() => {
      setX(prevX => {
        if (prevX >= 100) {
          clearInterval(id);
          return prevX;
        }
        return prevX + 1;
      });
    }, 100);
  }
  
  return(
    <>
      <main style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10vh",flexDirection:"column"}}>
        <p style={{width:"40%",textAlign:"center",fontSize:"large",marginBottom:"2vh"}}>
          Progress Bar 
        </p>
        <div style={{width:"40%",height:"3vh",borderRadius:"10px",background:"#e9ecef",border:"solid 1px #d9dadc",position:"relative"}}>
        <p style={{textAlign:"center",position:"absolute",left:"47%",color:x>50?"white":"black"}}>{x}%</p>
          <p style={{background:"#00c251",width:`${x}%`,transition:'width 0.1s linear',borderRadius:"10px",height:"100%"}}></p>
        </div>
        <p style={{width:"40%",textAlign:"center",fontSize:"large",marginBottom:"2vh"}}>
          {x==100?"Complete!":"Loading..."}
        </p>
      </main>
    </>
  )
}