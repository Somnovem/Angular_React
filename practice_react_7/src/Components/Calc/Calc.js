import {Component} from "react";
import './calc.css';
import {CalcStore} from "../../store/CalcStore";
import {EventActionsCalc} from "../../actions/EventActionsCalc";

class Calc extends Component {
    constructor() {
        super();
        this.state = {
            calcState: CalcStore.getState()
        };
    }

    componentDidMount() {
        CalcStore.addChangeListener(this.handleCalcStateChange);
    }

    componentWillUnmount() {
        CalcStore.removeChangeListener(this.handleCalcStateChange);
    }

    handleCalcStateChange = () => {
        this.setState({calcState: CalcStore.getState()})
    }

    render() {
        const { calcState } = this.state;
        return (
            <div className='calc-body'>
                <div className='calc-screen'>
                    <div id='calc-operation'>{calcState.history}</div>
                    <div id='calc-typed'>{calcState.displayValue}</div>
                </div>
                <div className='calc-button-row'>
                    <button onClick={EventActionsCalc.memoryClear} style={{width:'20%',fontSize:'1.05rem',height:'50px'}}>MC</button>
                    <button onClick={EventActionsCalc.memoryRecall} style={{width:'20%',fontSize:'1.05rem',height:'50px'}}>MR</button>
                    <button onClick={EventActionsCalc.memoryAdd} style={{width:'20%',fontSize:'1.05rem',height:'50px'}}>M+</button>
                    <button onClick={EventActionsCalc.memorySubtract} style={{width:'20%',fontSize:'1.05rem',height:'50px'}}>M-</button>
                    <button onClick={EventActionsCalc.memoryStore} style={{width:'20%',fontSize:'1.05rem',height:'50px'}}>MS</button>
                    <button onClick={EventActionsCalc.clear} className="ac">AC</button>
                    <button onClick={EventActionsCalc.opposite} className="opt">&#43;&#47;&#8722;</button>
                    <button onClick={() => {EventActionsCalc.selectAction('Mod')}} className="opt">&#37;</button>
                    <button onClick={() => {EventActionsCalc.selectAction('/')}} className="opt">&#247;</button>
                    <button onClick={EventActionsCalc.clearCurrent} className="ac">C</button>
                    <button onClick={EventActionsCalc.square} className="opt">x<sup>2</sup></button>
                    <button onClick={EventActionsCalc.sqrt} className="opt">√</button>
                    <button onClick={() => {EventActionsCalc.selectAction('Pow')}} className="opt" >x<sup>y</sup></button>
                    <button onClick={() => {EventActionsCalc.selectDigit('7')}}>7</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('8')}}>8</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('9')}}>9</button>
                    <button onClick={() => {EventActionsCalc.selectAction('*')}} className="opt">&#215;</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('4')}}>4</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('5')}}>5</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('6')}}>6</button>
                    <button onClick={() => {EventActionsCalc.selectAction('-')}} className="opt">&#8722;</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('1')}}>1</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('2')}}>2</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('3')}}>3</button>
                    <button onClick={() => {EventActionsCalc.selectAction('+')}} className="opt">&#43;</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('0')}}>0</button>
                    <button onClick={() => {EventActionsCalc.selectDigit('.')}}>.</button>
                    <button onClick={EventActionsCalc.backspace}>&#9003;</button>
                    <button onClick={EventActionsCalc.equals} className="opt">&#61;</button>
                </div>
            </div>
        );
    }
}

export default Calc;