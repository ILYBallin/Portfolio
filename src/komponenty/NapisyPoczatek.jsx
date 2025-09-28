import './style/NapisyPoczatek.css'

let delay = 0.2;

function NapisyPoczatek({display, x , y}){
    let listaLiter = Array.from(display)
    return (
        <div className="holder" style={{"--translateX" : x,"--translateY" : y}}> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryPoczatek key={i} litera={e} delay={delay+= 0.02}/>
                ))}
            </p>
        </div>
    );
}

function LiteryPoczatek({litera, delay}){
    let delayed = delay.toFixed(2)
    return (
        <span className="litera" style={{"--delay": delayed+"s"}}>{litera}</span>
    )
}

export default NapisyPoczatek