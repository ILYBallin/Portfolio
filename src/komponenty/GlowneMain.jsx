import "../style/GlowneMain.css"
import Karta from "./Karta"
import RuchomeNapisy from "./RuchomeNapisy"
import { Karty } from "../assets/Teksty"
import { useState } from "react"
// import { KoniecContext} from "./Poczatek"

function GlowneMain(){
    const [klasa,useKlasa] = useState(true);
    const [poof,usePoof] = useState(true);
    const zmienianieKlasy = (e)=>{
        if (e.animationName === "wchodzenie"){
            useKlasa(false);
        }
        if (e.animationName === "poof"){
            usePoof(false);
        }
    }
    return(
        <div className={`glowneOkno ${klasa ? "wejscie" : ""}`} onAnimationEnd={zmienianieKlasy}>
            <RuchomeNapisy display="Portfolio" kolor="black" size="200px" family="DejaVu Sans Mono, monospace" klasa={poof}/>
            <RuchomeNapisy display="ILYBallin" kolor="black" size="150px" family="DejaVu Sans Mono, monospace" klasa={poof}/>
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