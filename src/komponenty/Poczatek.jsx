import "../style/Poczatek.css"
import NapisyRuszane from "./NapisyPoczatek";

function Poczatek(){
    let kol = "white";
    let cz = "DejaVu Sans Mono, monospace";
    return (
        <div className="poczatekTlo">
            <div className="poczatekTekst">
                <NapisyRuszane display="Po co to?" x="400%" y="-800%" kolor={kol} czcionka={cz}/>
                <NapisyRuszane display="Nie wiem" x="-400%" y="800%" kolor={kol} czcionka={cz}/>
            </div>
        </div>
    );
}



export default Poczatek