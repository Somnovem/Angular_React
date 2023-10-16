import {Component} from "react";

class FootballClubAchievements extends Component {
    render() {
        const { club } = this.props;
        return (
            <div>
                <h2>Cups:</h2>
                <ul style={{listStyle:'none',padding:'0'}}>
                    {club.cups.map(((cup)=>(
                        <li style={{fontWeight:'bold',fontSize:'1.3rem'}}>{cup}</li>
                    )))}
                </ul>
            </div>
        );
    }
}

export default FootballClubAchievements;