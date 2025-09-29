import "../style/GlowneMain.css"
import Karta from "./Karta"
import RuchomeNapisy from "./RuchomeNapisy"
import { Karty } from "../assets/Teksty"
import { useState } from "react"

function GlowneMain(){
    const [klasa,useKlasa] = useState(true)
    const zmienianieKlasy = (e)=>{
        if (e.animationName === "wchodzenie"){
            useKlasa(false);
        }
    }
    return(
        <div className={`glowneOkno ${klasa ? "wejscie" : ""}`} onAnimationEnd={zmienianieKlasy}>
            <RuchomeNapisy display="Portfolio" kolor="black" size="200px" family="DejaVu Sans Mono, monospace"/>
            <RuchomeNapisy display="ILYBallin" kolor="black" size="150px" family="DejaVu Sans Mono, monospace"/>
            <div className="Info">
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
            </div>
        </div>
    )
}

export default GlowneMain