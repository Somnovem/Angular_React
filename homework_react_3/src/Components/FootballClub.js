import {Component} from "react";
import FootballClubAchievements from "./FootballClubAchievements";
import FootballClubPlayers from "./FootballClubPlayers";

class FootballClub extends Component {
    render() {
        let colors = ['red','blue','green','purple','orange','pink', 'cyan','magenta','yellow','brown'];
        let fontColor =  colors[Math.floor(Math.random() * colors.length)];
        let fontScale = (Math.random()+2).toString() + 'rem';
        const { club } = this.props;
        return (
            <div className='container row' style={{fontFamily:'Monaco', color:fontColor}}>
                <div className='col-9' >
                    <h1 style={{fontFamily:'Segoe UI',fontSize:fontScale}}>{club.name}</h1>
                    <h3>City: <b>{club.city}</b></h3>
                    <h3>Founded on: <b>{club.founded}</b></h3>
                    <FootballClubAchievements club={club}/>
                    <FootballClubPlayers club={club}/>
                </div>
                <div className='col-3'>
                    <img src={club.crestUrl} alt={club.name} style={{width:'100%'}}/>
                </div>
            </div>
        );
    }
}

export default FootballClub;