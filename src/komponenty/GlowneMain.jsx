import "../style/GlowneMain.css"
import Karta from "./Karta"
import RuchomeNapisy from "./RuchomeNapisy"
import { Karty } from "../assets/Teksty"

function GlowneMain(){
    return(
        <div className="glowneOkno">
            <RuchomeNapisy display="Portfolio" kolor="black" size="200px" family="DejaVu Sans Mono, monospace"/>
            <RuchomeNapisy display="ILYBallin" kolor="black" size="150px" family="DejaVu Sans Mono, monospace"/>
            <div className="Info">
                <Karta tytul="Sigma tytul" watrosc={Karty[0]}/>
                <Karta tytul="Sigma tytul" watrosc={Karty[1]}/>
            </div>
        </div>
    )
}

export default GlowneMain