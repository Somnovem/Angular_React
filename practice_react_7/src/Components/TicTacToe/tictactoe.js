import {Component} from "react";
import {TicTacToeStore} from "../../store/TicTacToeStore";
import {TicTacToeActions} from "../../actions/TicTacToeActions";

import './tictactoe.css'

class Tictactoe extends Component {
    constructor() {
        super();
        this.state = {
            currentState:TicTacToeStore.getState()
        }
    }
    componentDidMount() {
        TicTacToeStore.addChangeListener(this.handleCalcStateChange);
    }

    componentWillUnmount() {
        TicTacToeStore.removeChangeListener(this.handleCalcStateChange);
    }

    handleCalcStateChange = () => {
        this.setState({currentState: TicTacToeStore.getState()})
    }

    render() {
        const {field,result} = this.state.currentState;
        return (
            <div>
                <div className='container' disabled={result !== ''}>
                    {
                        field.map((item,index) => (
                            <button className='tile' key={index} onClick={() => {TicTacToeActions.chooseTile(index)}}>{item}</button>
                        ))
                    }
                </div>
                {result !== '' && <div>
                    <h1>{result}</h1>
                    <button onClick={TicTacToeActions.restart}>Restart</button>
                </div>}
            </div>
        );
    }
}

export default Tictactoe;