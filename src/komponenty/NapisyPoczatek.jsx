import './style/NapisyPoczatek.css'
import { useEffect,useState } from 'react';

let delay = 0;

function NapisyPoczatek({display}){
    let listaLiter = Array.from(display)
    return (
        <div className='holder'> 
            <p className="slowa">
                {listaLiter.map((e , i)=>(
                    <LiteryPoczatek key={i} litera={e} />
                ))}
            </p>
        </div>
    );
}

function LiteryPoczatek({litera}){
    delay = delay + 0.02;
    let delayed = delay.toFixed(2)
    const [minie,minelo]= useState(true);

    useEffect(()=>{
        const licznik = setTimeout(()=>{
            minelo(false);
        },1200)
        return ()=> clearTimeout(licznik)
    })
    if(minie){
        return (
            <span className='litera' style={{"--delay": delayed+"s"}}>{litera}</span>
        )
    }else{
        return {
            
        }
    }
}

export default NapisyPoczatek