import "../style/Naglowek.css"
import Guzik from "./Guzik"

function Naglowke(){
    return (
        <div className="pasek">
            <div className="menu">
                <Guzik text="Home"/>
                <Guzik text="Projekty"/>
                <Guzik text="Nigga" />
            </div>
        </div>
    )
}

export default Naglowke