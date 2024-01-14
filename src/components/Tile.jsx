function Tile({className, value , onClick, playerTurn, strikeClassValue}){
    let hoverValue = null;
    if (value == null && playerTurn!==null){
        hoverValue = `${playerTurn.toLowerCase()}-hover`;
    }
    return(

        <div onClick = {onClick} className={`tile ${hoverValue} `}>
            <h1 className={`${strikeClassValue} ${value}`}>{value}</h1>
        </div>
        
    )
}
export default Tile;