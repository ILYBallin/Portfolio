import "../style/Karta.css"

function Karta({tytul,watrosc}){
    return(
        <div className="karta">
            <h3 className="kartaTytul">{tytul}</h3>
            <p className="kartaWartosc">{watrosc}</p>
        </div>
    )
}

export default Karta