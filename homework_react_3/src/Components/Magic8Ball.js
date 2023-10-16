import {Component} from "react";

class Magic8Ball extends Component {
    responses = [
        'Yes',
        'No',
        'Maybe',
        'Ask again later',
        'Outlook not so good',
        'Cannot predict now',
        'Signs point to yes',
        'Reply hazy, try again',
    ];

    constructor(props) {
        super(props);
        this.state = {
            answer: null,
        };
    }

    getRandomAnswer = () => {
        const randomIndex = Math.floor(Math.random() * this.responses.length);
        this.setState({ answer: this.responses[randomIndex] });
    };

    render() {
        return (
            <div id='magic-ball-container' onClick={this.getRandomAnswer}>
                <div className='d-flex justify-content-center align-items-center' style={{backgroundColor:'whitesmoke',borderRadius:'50%',color:'black',width:'200px',height:'200px'}}>
                    {this.state.answer || 'Ask a question'}
                </div>
            </div>
        );
    }
}

export default Magic8Ball;