import dispatcher from "../dispatcher/dispatcher";
export const EventActionsCalc = {
    selectAction: (action) => {
        dispatcher.dispatch({
            actionType: 'ACTION',action
        });
    },
    selectDigit: (digit) => {
        dispatcher.dispatch({
            actionType: 'DIGIT',digit
        });
    },
    clear: () => {
        dispatcher.dispatch({
            actionType: 'CLEAR'
        });
    },
    clearCurrent: () => {
        dispatcher.dispatch({
            actionType: 'CLEAR_CURRENT'
        });
    },
    square: () => {
        dispatcher.dispatch({
            actionType: 'SQUARE'
        });
    },
    sqrt: () => {
        dispatcher.dispatch({
            actionType: 'SQRT'
        });
    },
    equals: () => {
        dispatcher.dispatch({
            actionType: 'EQUALS'
        });
    },
    backspace: () => {
        dispatcher.dispatch({
            actionType: 'BACKSPACE'
        });
    },
    opposite: () => {
        dispatcher.dispatch({
            actionType: 'OPPOSITE'
        });
    },
    memoryStore: () => {
        dispatcher.dispatch({
            actionType: 'MEMORY_STORE'
        });
    },
    memoryAdd: () => {
        dispatcher.dispatch({
            actionType: 'MEMORY_ADD'
        });
    },
    memorySubtract: () => {
        dispatcher.dispatch({
            actionType: 'MEMORY_SUBTRACT'
        });
    },
    memoryRecall: () => {
        dispatcher.dispatch({
            actionType: 'MEMORY_RECALL'
        });
    },
    memoryClear: () => {
        dispatcher.dispatch({
            actionType: 'MEMORY_CLEAR'
        });
    },
};