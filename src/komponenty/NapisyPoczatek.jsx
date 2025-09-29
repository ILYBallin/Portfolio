import '../style/NapisyPoczatek.css'
import { useState } from 'react';

function NapisyPoczatek({display, x , y, delay}){
    let listaLiter = Array.from(display)
    return (
        <div className="holder" style={{"--translateX" : x,"--translateY" : y}}> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryRuszane key={i} litera={e} delay={delay+= 0.04}/>
                ))}
            </p>
        </div>
    );
}

export function LiteryRuszane({litera, delay, kolor, rozmiar, czcionka}){
    let delayed = delay.toFixed(2)
    const [klasa,useKlasa] = useState(true)
    const zmienianieKlasy = (e)=>{
        if (e.animationName === "wchodzenie"){
            useKlasa(false);
        }
    }
    return (
        <span className={`litera ${klasa ? "wejscie" : ""}`} style={{"--delay": delayed+"s",color: kolor, fontSize: rozmiar, fontFamily:czcionka}} onAnimationEnd={zmienianieKlasy}>{litera}</span>
    )
}

export default NapisyPoczatek