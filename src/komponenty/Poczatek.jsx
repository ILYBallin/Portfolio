import NapisyPoczatek from "./NapisyPoczatek"
import "./style/Poczatek.css"

function Poczatek(){
    return (
        <div className="glownyTekst">
            <NapisyPoczatek display="Witaj" x="400%" y="-700%"/>
            <NapisyPoczatek display="Zjebie" x="-400%" y="700%"/>
        </div>
    );
}



export default Poczatek