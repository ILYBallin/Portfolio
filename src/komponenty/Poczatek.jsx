import "../style/Poczatek.css"
import NapisyRuszane from "./NapisyPoczatek";

function Poczatek(){
    let kol = "white";
    let cz = "DejaVu Sans Mono, monospace";
    let opoz = 0.2;
    
    const AnimacjaSieWYkonala = (e)=>{
        if(e.animationName === "poof"){

        }
    }

    return (
        <div className="poczatekTlo" onAnimationEnd={AnimacjaSieWYkonala}>
            <div className="poczatekTekst">
                <NapisyRuszane display="Po co to?" x="400vw" y="-400vw" delay={opoz} kolor={kol} czcionka={cz}/>
                <NapisyRuszane display="Nie wiem" x="-400vw" y="400vw"  delay={opoz+0.6} kolor={kol} czcionka={cz}/>
            </div>
        </div>
    );
}



export default Poczatek