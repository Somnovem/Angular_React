import dispatcher from "../../dispatcher";

export const FifteenActions = {
    chooseTile: (tileIndex) => {
        dispatcher.dispatch({
            actionType: 'CHOOSE_TILE',tileIndex
        });
    },
    restart: () => {
        dispatcher.dispatch({
            actionType: 'RESTART'
        });
    },
    makePcCompletePuzzle: () => {
        dispatcher.dispatch({
            actionType: 'PC_GAME'
        });
    }
};