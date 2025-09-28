import './style/NapisyPoczatek.css'
import { useState } from 'react';

let delay = 0.2;

function NapisyPoczatek({display, x , y}){
    let listaLiter = Array.from(display)
    const [done,setDone]= useState(false)

    const handleAnimationEnd = (e) => {
    if (e.animationName === "yeet") {
      setDone(true);
    }
  };
    return (
        <div className={`holder ${done ? "niewidac" : ""}`} style={{"--translateX" : x,"--translateY" : y}} onAnimationEnd={handleAnimationEnd}> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryPoczatek key={i} litera={e} delay={delay+= 0.02}/>
                ))}
            </p>
        </div>
    );
}

function LiteryPoczatek({litera, delay}){
    let delayed = delay.toFixed(2)
    const [minie,minelo]= useState(false);
    return (
        <span className={`litera ${minie ? "widac" : ""}`} style={{"--delay": delayed+"s"}} onAnimationEnd={()=> minelo(true)}>{litera}</span>
    )
}

export default NapisyPoczatek