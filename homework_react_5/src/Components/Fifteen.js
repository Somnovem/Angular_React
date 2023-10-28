import {Component} from "react";
import {FifteenStore} from "../flux/FifteenFlux/store";
import {FifteenActions} from "../flux/FifteenFlux/actions";

import './fifteen.css'

class Fifteen extends Component {
    constructor() {
        super();
        this.state = {
            currentState:FifteenStore.getState(),
            expectedHours: 0,
            expectedMinutes: 0,
            expectedSeconds: 0,
            expectedTime: null,
            timerInterval: null,
            startedPlaying: false,
            timeUp: false
        }
    }



    componentDidMount() {
        FifteenStore.addChangeListener(this.handleFifteenStateChange);
    }

    componentWillUnmount() {
        FifteenStore.removeChangeListener(this.handleFifteenStateChange);
    }

    handleFifteenStateChange = () => {
        this.setState({currentState: FifteenStore.getState()})
    }

    handleHoursInput = (e) => {
        if (e.target.value < 0 || e.target.value > 23) return;
        this.setState({expectedHours: parseInt(e.target.value)})
    }
    handleMinutesInput = (e) => {
        if (e.target.value < 0 || e.target.value > 59) return;
        this.setState({expectedMinutes: parseInt(e.target.value)})
    }
    handleSecondsInput = (e) => {
        if (e.target.value < 0 || e.target.value > 59) return;
        this.setState({expectedSeconds: parseInt(e.target.value)})
    }

    startPlaying = () => {
        let expectedTime = new Date();
        expectedTime.setHours(expectedTime.getHours() + this.state.expectedHours);
        expectedTime.setMinutes(expectedTime.getMinutes() + this.state.expectedMinutes);
        expectedTime.setSeconds(expectedTime.getSeconds() + this.state.expectedSeconds);
        this.setState({startedPlaying:true,expectedTime : expectedTime,timerInterval: setInterval(()=>{
            if(new Date().getHours() === this.state.expectedTime.getHours() && new Date().getMinutes() === this.state.expectedTime.getMinutes() && new Date().getSeconds() === this.state.expectedTime.getSeconds()){
                clearInterval(this.state.timerInterval);
                this.setState({timeUp: true});
                alert("Time's up!");
            }
        },1000)})
    }

    restart = () => {
        this.setState({
            expectedHours: 0,
            expectedMinutes: 0,
            expectedSeconds: 0,
            expectedTime: null,
            timerInterval: null,
            startedPlaying: false,
            timeUp: false
        })
        FifteenActions.restart();
    }

    render() {
        const {field,result,pcPlaying} = this.state.currentState;
        return (
            <div style={{marginTop:'20px'}}>
                {!pcPlaying && !this.state.startedPlaying && <div>
                    <h2 style={{margin:'10px'}}>Time to complete:</h2>
                    <div style={{margin:'10px'}}>
                        <label>
                            Hours:
                            <input style={{marginLeft:'10px'}} type="number" value={this.state.expectedHours} onChange={this.handleHoursInput}/>
                        </label>
                    </div>
                    <div style={{margin:'10px'}}>
                        <label>
                            Minutes:
                            <input style={{marginLeft:'10px'}} type="number" value={this.state.expectedMinutes} onChange={this.handleMinutesInput}/>
                        </label>
                    </div>
                    <div style={{margin:'10px'}}>
                        <label>
                            Seconds:
                            <input style={{marginLeft:'10px'}} type="number" value={this.state.expectedSeconds} onChange={this.handleSecondsInput}/>
                        </label>
                    </div>
                    <button onClick={this.startPlaying} style={{marginLeft:'10px'}}>Start Playing</button>
                </div>}
                {this.state.expectedTime != null && !this.state.timeUp && <div>
                    <h4>Expected to finish by: {this.state.expectedTime.toLocaleTimeString()}</h4>
                </div>}
                <div className='container' >
                    {
                        field.map((item,index) => (
                            <button className='tile' disabled={pcPlaying || this.state.timeUp || !this.state.startedPlaying || (result !== '')} key={index} onClick={() => {FifteenActions.chooseTile(index)}}>{item}</button>
                        ))
                    }
                </div>
                {result === '' && !this.state.startedPlaying && !pcPlaying && <div>
                    <button style={{marginLeft:'10px'}} onClick={FifteenActions.makePcCompletePuzzle}>PC Complete</button>
                </div>}
                {(result !== '' || this.state.timeUp) && <div>
                    <h1>{result}</h1>
                    <button style={{marginLeft:'10px'}} onClick={this.restart}>Restart</button>
                </div>}
            </div>
        );
    }
}

export default Fifteen;