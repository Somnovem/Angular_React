import dispatcher from "../dispatcher/dispatcher";

export const TicTacToeActions = {
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
};