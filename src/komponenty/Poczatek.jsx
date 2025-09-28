import NapisyPoczatek from "./NapisyPoczatek"
import "./style/Poczatek.css"

function Poczatek(){
    return (
        <div className="poczatekTlo">
            <div className="poczatekTekst">
                <NapisyPoczatek display="Witaj" x="400%" y="-700%"/>
                <NapisyPoczatek display="Zjebie" x="-400%" y="700%"/>
            </div>
        </div>
    );
}



export default Poczatek