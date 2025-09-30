import '../style/RuchomeNapisy.css'
import { LiteryRuszane } from './NapisyPoczatek';

let delay = 2;

function RuchomeNapisy({display, kolor, size, family, klasa}){
    let powiekszonyDelay =  0.04;
    let listaLiter = Array.from(display)
    let obliczonyDelay = (2+(powiekszonyDelay * listaLiter.length));
    console.log(display);
    console.log(obliczonyDelay);
    return (
        <div className="holdery"> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryRuszane key={i} litera={e} opoznienie={delay+=0.02} kolor={kolor} rozmiar={size} czcionka={family}/>
                ))}
            </p>
        </div>
    );
}

export default RuchomeNapisy