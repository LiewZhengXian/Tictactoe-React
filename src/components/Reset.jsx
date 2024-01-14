import GameState from "./GameState.js";
function Reset({gameState, onReset}) {
    if (gameState=== GameState.inProgress){
        return;
    }
    return(<div className="center"><button onClick={onReset} className="reset-button">Reset</button></div>);
}
export default Reset;