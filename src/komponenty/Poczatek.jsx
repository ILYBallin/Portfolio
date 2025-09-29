import "../style/Poczatek.css"
import NapisyRuszane from "./NapisyPoczatek";

function Poczatek(){
    let kol = "white";
    let cz = "DejaVu Sans Mono, monospace";
    let opoz = 0.2;
    return (
        <div className="poczatekTlo">
            <div className="poczatekTekst">
                <NapisyRuszane display="Po co to?" x="400%" y="-800%" delay={opoz} kolor={kol} czcionka={cz}/>
                <NapisyRuszane display="Nie wiem" x="-400%" y="800%"  delay={opoz+0.6} kolor={kol} czcionka={cz}/>
            </div>
        </div>
    );
}



export default Poczatek