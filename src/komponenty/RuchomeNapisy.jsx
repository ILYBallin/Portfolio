import '../style/RuchomeNapisy.css'
import { LiteryRuszane } from './NapisyPoczatek';

let delay = 3.1;

function RuchomeNapisy({display, kolor, size, family}){
    let listaLiter = Array.from(display)
    return (
        <div className="holdery"> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryRuszane key={i} litera={e} delay={delay+= 0.02} kolor={kolor} rozmiar={size} czcionka={family}/>
                ))}
            </p>
        </div>
    );
}

export default RuchomeNapisy