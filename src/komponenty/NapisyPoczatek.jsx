import '../style/NapisyPoczatek.css'

let delay = 0.2;

function NapisyPoczatek({display, x , y}){
    let listaLiter = Array.from(display)
    return (
        <div className="holder" style={{"--translateX" : x,"--translateY" : y}}> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryRuszane key={i} litera={e} delay={delay+= 0.04}/>
                ))}
            </p>
        </div>
    );
}

export function LiteryRuszane({litera, delay, kolor, rozmiar, czcionka}){
    let delayed = delay.toFixed(2)
    return (
        <span className="litera" style={{"--delay": delayed+"s",color: kolor, fontSize: rozmiar, fontFamily:czcionka}}>{litera}</span>
    )
}

export default NapisyPoczatek