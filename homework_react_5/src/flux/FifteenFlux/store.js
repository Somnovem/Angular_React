import dispatcher from "../../dispatcher";
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'CHANGE';

let field = [];
let result = '';
let pcPlaying = false;

const fillField = () => {
    field = [];
    const emptySpaceIndex = Math.floor(Math.random() * 16)+1;
    const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let ind = 0;
    for (let i = 1; i <= 16; i++) {
        if (i === emptySpaceIndex) {
            field.push(null);
        } else {
            field.push(num[ind++]);
        }
    }
    for (let i = field.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [field[i], field[j]] = [field[j], field[i]];
    }
}


fillField();
const checkWin = () => {
    let sorted = false;
    for (let i = 1;i < 15; ++i){
        if (typeof(field[i]) == 'number' && field[i] > field[i-1]){
            if (i === 14) sorted = true;
        }
        else break;
    }
    return sorted;
}

export const FifteenStore = Object.assign({},EventEmitter.prototype,{
    getState: () => ({field,result,pcPlaying}),
    emitChange: () => FifteenStore.emit(CHANGE_EVENT),
    addChangeListener: (callback) => FifteenStore.on(CHANGE_EVENT,callback),
    removeChangeListener: (callback) => FifteenStore.removeListener(CHANGE_EVENT,callback)
})

const makePcMove = () => {
    const index = Math.floor(Math.random() * 16);
    if(field[index] === null) setTimeout(makePcMove,10);
    let switchDone = false;
    if (field[index-1] === null && index !== 4 && index !== 8 && index !== 12){
        field[index - 1] = field[index];
        field[index] = null;
        switchDone = true;
    }
    else if (!switchDone && field[index+1] === null && index !== 3 && index !== 7 && index !== 11){
        field[index + 1] = field[index];
        field[index] = null;
        switchDone = true;
    }
    else if (!switchDone && field[index-4] === null){
        field[index - 4] = field[index];
        field[index] = null;
        switchDone = true;
    }
    else if (!switchDone && field[index+4] === null){
        field[index + 4] = field[index];
        field[index] = null;
        switchDone = true;
    }
    FifteenStore.emitChange();
    if(switchDone) {
        if (checkWin()) {
            result = 'Pc completed the puzzle!';
            FifteenStore.emitChange();
            return;
        }
        else setTimeout(makePcMove,10);
    }
    else setTimeout(makePcMove,10);
}

dispatcher.register((action)=>  {
    switch (action.actionType){
        case 'CHOOSE_TILE':
            let index = action.tileIndex;
            if(field[index] === null) return;
            let switchDone = false;
            if (field[index-1] === null && index !== 4 && index !== 8 && index !== 12){
                field[index - 1] = field[index];
                field[index] = null;
                switchDone = true;
            }
            else if (!switchDone && field[index+1] === null && index !== 3 && index !== 7 && index !== 11){
                field[index + 1] = field[index];
                field[index] = null;
                switchDone = true;
            }
            else if (!switchDone && field[index-4] === null){
                field[index - 4] = field[index];
                field[index] = null;
                switchDone = true;
            }
            else if (!switchDone && field[index+4] === null){
                field[index + 4] = field[index];
                field[index] = null;
                switchDone = true;
            }
            if(switchDone){
                if (checkWin()) result = 'You completed the puzzle!Congratulations!';
                FifteenStore.emitChange();
            }
            break;
        case 'RESTART':
            fillField();
            result = '';
            FifteenStore.emitChange();
            break;
        case 'PC_GAME':
            pcPlaying = true;
            makePcMove();
            FifteenStore.emitChange();
            break;
    }
})