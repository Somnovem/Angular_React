import dispatcher from "../dispatcher/dispatcher";
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'CHANGE';

let field = ['','','','','','','','',''];
let result = '';
let isPlayersMove = Math.round(Math.random());
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,3,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const makePcMove = () => {
    for (let i = 0; i < 9; i++){
        const index = Math.floor(Math.random()*9);
        if (field[index] === ''){
            field[index] = 'o';
            break;
        }
    }
    isPlayersMove = true;
}

if (!isPlayersMove) makePcMove();

const checkWin = () => {
    for (let i = 0; i < winningCombinations.length; i++){
        if ((field[winningCombinations[i][0]] === field[winningCombinations[i][1]])  && (field[winningCombinations[i][1]] === field[winningCombinations[i][2]])){
            if (field[winningCombinations[i][0]] === 'x' || field[winningCombinations[i][0]] === 'o')
                result = field[winningCombinations[i][0]] === 'x' ? 'You won!' : 'PC won!';
        }
    }
}

export const TicTacToeStore = Object.assign({},EventEmitter.prototype,{
    getState: () => ({field,result}),
    emitChange: () => TicTacToeStore.emit(CHANGE_EVENT),
    addChangeListener: (callback) => TicTacToeStore.on(CHANGE_EVENT,callback),
    removeChangeListener: (callback) => TicTacToeStore.removeListener(CHANGE_EVENT,callback)
})

dispatcher.register((action)=>  {
    switch (action.actionType){
        case 'CHOOSE_TILE':
            if(!isPlayersMove) return;
            isPlayersMove = false;
            const index = action.tileIndex;
            field[index] = 'x';
            checkWin();
            if (result === ''){
                makePcMove();
                checkWin();
            }
            TicTacToeStore.emitChange();
            break;
        case 'RESTART':
            field = ['','','','','','','','',''];
            result = '';
            isPlayersMove = Math.round(Math.random());
            if (!isPlayersMove) makePcMove();
            TicTacToeStore.emitChange();
            break;
    }
})