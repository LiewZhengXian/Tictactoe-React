import {useEffect, useState} from "react";
import Board from "./Board";
import GameOver from "./GameOver.jsx";
import GameState from "./GameState.js";
import Reset from "./Reset.jsx";	
const PLAYER_X = "x";	
const PLAYER_O = "o";
const WINNING_COMBINATIONS = [
    {combo: [0, 1, 2]},
    {combo: [3, 4, 5]},
    {combo: [6, 7, 8]},
    {combo: [0, 3, 6]},
    {combo: [1, 4, 7]},
    {combo: [2, 5, 8]},
    {combo: [0, 4, 8]},
    {combo: [2, 4, 6]}
];
function checkWinner(tiles,strikeClass,setStrikeClass ,setGameState){
    for(const{combo} of WINNING_COMBINATIONS){
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];
        if(tileValue1 && tileValue1 === tileValue2 && tileValue1 === tileValue3){
            const newStrike = [...strikeClass]
            newStrike[combo[0]] = "winning-tile";
            newStrike[combo[1]] = "winning-tile";
            newStrike[combo[2]] = "winning-tile";
            setStrikeClass(newStrike);
            if(tileValue1 === PLAYER_X){
                setGameState(GameState.playerXWins);
            }        
            else{
                setGameState(GameState.playerOWins);
            
            }
            return;
        
    }

}
const areAllTilesFilled = tiles.every((tile)=> tile !== null);
if(areAllTilesFilled){
    setGameState(GameState.draw);
}
}
function TicTacToe(){
    const [tiles,setTiles]= useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState(Array(9).fill(""));
    const[gameState, setGameState] = useState(GameState.inProgress);
    useEffect(()=>{checkWinner(tiles,strikeClass,setStrikeClass,setGameState)},[tiles]);
    
    const handleTileClick = (index)=>{
        if (gameState!== GameState.inProgress){
            return;
        }
        if(tiles[index]!== null){
            return;
        }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if (playerTurn === PLAYER_X){
            setPlayerTurn(PLAYER_O);

        }else{
            setPlayerTurn(PLAYER_X);
        }
    }
    const handleReset = ()=>{
        console.log("reset");
        setGameState(GameState.inProgress);
        setPlayerTurn(PLAYER_X);
        setTiles(Array(9).fill(null));
        setStrikeClass(Array(9).fill(""));
      
    }
    return (
        <div>
            <h1>TicTacToe</h1>
            
                <Board  playerTurn = {playerTurn} tiles = {tiles} onTileClick = {handleTileClick} strikeClass={strikeClass}/>

                <GameOver gameState = {gameState}/>
                <Reset gameState={gameState} onReset = {handleReset} />

        
        </div>
    )
}
export default TicTacToe;