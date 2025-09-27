import NapisyPoczatek from "./NapisyPoczatek"
import "./style/Poczatek.css"

function Poczatek(){
    return (
        <div className="glownyTekst">
            <NapisyPoczatek display="Witaj" />
            <NapisyPoczatek display="Zjebie" />
        </div>
    );
}



export default Poczatek