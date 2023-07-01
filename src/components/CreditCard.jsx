
export default function PrintcreditCards({objeto:{ cssClass, type, number, expirationMonth, expirationYear, bank, owner }}) {
    return (
        <div className={cssClass ? 'card flex ' + cssClass : 'card flex bg-blue-400'}>
            <h1><i className={type==='visa' ? "fa-brands fa-lg text-neutral-950 fa-cc-" + type : "fa-brands fa-lg text-neutral-950 fa-cc-mastercard" }></i></h1>
            <p>{('\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF '+ number.slice(12))}</p>
            <div className="dateExpires flex">
                <p>Expires {expirationMonth} / {expirationYear}</p>
                <p>{bank}</p>
            </div>  
            <span>{owner}</span>
        </div>
    );
}
