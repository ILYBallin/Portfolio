import '../style/NapisyPoczatek.css'
import { useState } from 'react';

function NapisyPoczatek({display, x , y, delay}){
    let powiekszonyDelay =  0.04;
    let listaLiter = Array.from(display);
    let obliczonyDelay = (delay+(powiekszonyDelay * listaLiter.length));
    console.log(display);
    console.log(obliczonyDelay);
    return (
        <div className="holder" style={{"--translateX" : x,"--translateY" : y}}> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryRuszane key={i} litera={e} opoznienie={delay+=powiekszonyDelay}/>
                ))}
            </p>
        </div>
    );
}

export function LiteryRuszane({litera, opoznienie, kolor, rozmiar, czcionka}){
    let delayed = opoznienie.toFixed(2)
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