import './style/NapisyPoczatek.css'

function NapisyPoczatek({display}){
    return (
        <div className='holder'> 
            <p className="slowa">{display}</p>
        </div>
    );
}

export default NapisyPoczatek