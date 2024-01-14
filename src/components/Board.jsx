import Tile from "./Tile";

function Board({tiles, onTileClick, playerTurn, strikeClass}) {
    return (
        <div className="board">
            
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Tile playerTurn={playerTurn} strikeClassValue = {strikeClass[index]} onClick={() => onTileClick(index)} value={tiles[index]}/>
            ))}

        </div>

        )
}
export default Board;