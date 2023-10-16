import {Component} from "react";

class FootballClubPlayer extends Component {
    render() {
        const { club } = this.props;
        return (
            <div>
                <h2 style={{color:'white'}}>Players:</h2>
                <ul>
                    {club.players.map(((player)=>(
                        <li style={{color:'white'}}>{player}</li>
                    )))}
                </ul>
            </div>
        );
    }
}

export default FootballClubPlayer;