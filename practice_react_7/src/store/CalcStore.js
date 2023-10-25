import dispatcher from "../dispatcher/dispatcher";
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'CHANGE';

let displayValue =  '0'
let history = null
let operator = null
let firstNumber = null
let performedAction = null
let memoryNumber = ''

export const CalcStore = Object.assign({},EventEmitter.prototype,{
    getState: () => ({ displayValue, history }),
    emitChange: () => CalcStore.emit(CHANGE_EVENT),
    addChangeListener: (callback) => CalcStore.on(CHANGE_EVENT,callback),
    removeChangeListener: (callback) => CalcStore.removeListener(CHANGE_EVENT,callback)
})

const clear = () =>
{
    displayValue =  '0'
    operator =  null
    firstNumber = null
    performedAction = null
    history = null
}

const confirmAction = (action = '') =>
{
    operator = action
    history =  displayValue + ' ' + action
    firstNumber = parseFloat(displayValue)
    displayValue = '0'
}

const pressDigit = (digit = '') =>
{
    if (performedAction)
    {
        clear();
        performedAction = true;
    }
    displayValue =  displayValue === '0' ? digit : displayValue + digit
}

const opposite= () =>
{
    if (displayValue.length !== 0 && displayValue !== "0")
    {
        if (displayValue[0] === '-') displayValue = displayValue.slice(1);
        else displayValue = '-' + this.state.displayValue;
    }
}

const backspace= () =>
{
    if (!performedAction && displayValue.length !== 0 && displayValue !== "0"){
        if (displayValue.length === 1) displayValue = '0';
        else displayValue = displayValue.slice(0,displayValue.length - 2);
    }
    if (this.state.displayValue.length) displayValue = '0';
}

const clearCurrent= () =>
{
    if(!performedAction) displayValue = '0';
}

const square = () =>
{
    firstNumber = parseFloat(displayValue);
    history = `${firstNumber} ^ 2 =`;
    displayValue = `${firstNumber * firstNumber}`;
    performedAction = true;
}

const squareRoot= () =>
{
    firstNumber = parseFloat(displayValue);
    history = `${firstNumber} sqrt =`;
    displayValue = `${Math.sqrt(firstNumber)}`;
    performedAction = true;
}

const equals = () =>
{
    const secondNumber = parseFloat(displayValue);
    switch (operator)
    {
        case "+":
            history =  `${firstNumber} + ${secondNumber} =`;
            displayValue =  `${firstNumber + secondNumber}`;
            break;
        case "-":
            history =  `${firstNumber} - ${secondNumber} =`;
            displayValue =  `${firstNumber - secondNumber}`;
            break;
        case "*":
            history =  `${firstNumber} * ${secondNumber} =`;
            displayValue =  `${firstNumber * secondNumber}`;
            break;
        case "/":
            history =  `${firstNumber} / ${secondNumber} =`;
            displayValue =  secondNumber === 0 ? "can't dvd by 0" : `${firstNumber / secondNumber}`
            break;
        case "Mod":
            history =  `${firstNumber} % ${secondNumber} =`;
            displayValue =  `${Math.floor(firstNumber / secondNumber)}`;
            break;
        case "Pow":
            history =  `${firstNumber} ^ ${secondNumber} =`;
            displayValue =  `${Math.pow(firstNumber,secondNumber)}`
            break;
    }
    performedAction = true;
}

const memoryStore = () =>
{
    memoryNumber = displayValue;
}

const memoryAdd = () =>
{
    memoryNumber = `${parseFloat(memoryNumber) + parseFloat(displayValue)}`;
}

const memorySubtract = () =>
{
    memoryNumber = `${parseFloat(memoryNumber) - parseFloat(displayValue)}`;
}

const memoryRecall = () =>
{
    displayValue = memoryNumber;
}

const memoryClear = ()=>
{
    memoryNumber = '0';
}



dispatcher.register((action)=>  {
    switch (action.actionType){
        case 'DIGIT':
            const digit = action.digit;
            pressDigit(digit);
            CalcStore.emitChange();
            break;
        case 'ACTION':
            const operator = action.action;
            confirmAction(operator);
            CalcStore.emitChange();
            break;
        case 'OPPOSITE':
            opposite();
            CalcStore.emitChange();
            break;
        case 'BACKSPACE':
            backspace();
            CalcStore.emitChange();
            break;
        case 'CLEAR_CURRENT':
            clearCurrent();
            CalcStore.emitChange();
            break;
        case 'CLEAR':
            clear();
            CalcStore.emitChange();
            break;
        case 'SQRT':
            squareRoot();
            CalcStore.emitChange();
            break;
        case 'SQUARE':
            square();
            CalcStore.emitChange();
            break;
        case 'EQUALS':
            equals();
            CalcStore.emitChange();
            break;
        case 'MEMORY_STORE':
            memoryStore();
            CalcStore.emitChange();
            break;
        case 'MEMORY_ADD':
            memoryAdd();
            CalcStore.emitChange();
            break;
        case 'MEMORY_SUBTRACT':
            memorySubtract();
            CalcStore.emitChange();
            break;
        case 'MEMORY_RECALL':
            memoryRecall();
            CalcStore.emitChange();
            break;
        case 'MEMORY_CLEAR':
            memoryClear();
            CalcStore.emitChange();
            break;
    }
});