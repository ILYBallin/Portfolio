import "../style/Glowne.css"
import Naglowke from "../komponenty/Naglowek"
import GlowneMain from "../komponenty/GlowneMain"

function Glowne() {
    return(
        <div className="glowneTlo">
            <Naglowke/>
            <GlowneMain/>
        </div>
    )
}

export default Glowne