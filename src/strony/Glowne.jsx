import "../style/Glowne.css"
import Naglowke from "../komponenty/Naglowek"
import GlowneMain from "../komponenty/GlowneMain"
import GlowneScroll from "../komponenty/GlowneScroll"

function Glowne() {
    return(
        <div className="glowneTlo">
            <GlowneMain/>
            <GlowneScroll/>
        </div>
    )
}

export default Glowne