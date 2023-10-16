import './App.css';
import FootballClub from "./Components/FootballClub";
import {Component} from "react";
import Magic8Ball from "./Components/Magic8Ball";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClubIndex: 0,
    };
  }

  clubs = [
    {
      name: 'Dynamo Kyiv',
      city: 'Kyiv, Ukraine',
      founded: '13 May 1927',
      crestUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/FC_Dynamo_Kyiv_logo.svg/225px-FC_Dynamo_Kyiv_logo.svg.png',
      cups: ["European Cup Winners' Cup - 2", 'UEFA Super Cup - 2', 'UEFA Intertoto Cup - 2'],
      players: ['Heorhiy Bushchan','Kostyantyn Vivcharenko','Denys Popov','Volodymyr Brazhko','Andriy Yarmolenko','Volodymyr Shepelyev','Mykola Shaparenko','Vladyslav Vanat','Oleksandr Andriyevskyi','Oleksandr Karavayev','Vladyslav Supryaha','Vladyslav Kabayev','Navin Malysh','Oleksandr Tymchyk']
    },
    {
      name: 'Liverpool',
      city: 'Liverpool, England',
      founded: '3 June 1892',
      crestUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png',
      cups: ['English Premier League Titles (Top Division) - 19','FA Cup - 7', 'UEFA Champions League - 6', 'FIFA Club World Cup - 1'],
      players: ['Alisson Becker (4th captain)','EnJoe Gomez','Wataru Endō','Virgil van Dijk (captain)','Ibrahima Konaté','Thiago Alcântara','Luis Díaz','Dominik Szoboszlai','Darwin Núñez','Alexis Mac Allister','Mohamed Salah','Adrián','Curtis Jones','Cody Gakpo']
    },
    {
      name: 'Bayern Munich',
      city: 'Munich, Bavaria',
      founded: '27 February 1900',
      crestUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/285px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
      cups: ['FIFA Club World Cup - 2','Intercontinental Cup - 2','UEFA Super Cup - 2','UEFA Cup - 1',"UEFA Cup Winners' Cup - 1"],
      players: ['Manuel Neuer (captain)','Dayot Upamecano','Kim Min-jae','Matthijs de Ligt','Joshua Kimmich (3rd captain)','Serge Gnabry','Leon Goretzka','Harry Kane','Leroy Sané','Kingsley Coman','Eric Maxim Choupo-Moting','Daniel Peretz']
    },
  ];

  nextClub = () => {
    this.setState((prevState) => ({
      currentClubIndex: (prevState.currentClubIndex + 1) % this.clubs.length,
    }));
  };

  previousClub = () => {
    this.setState((prevState) => ({
      currentClubIndex:
          prevState.currentClubIndex === 0
              ? this.clubs.length - 1
              : prevState.currentClubIndex - 1,
    }));
  };

  render() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
          {/*<Magic8Ball/>*/}
          <div className='container row' id='wrapper'>
             <div className='col-1 d-flex justify-content-center align-content-center'>
               <button onClick={this.previousClub}>←</button>
             </div>
             <div className='col-10'>
               <FootballClub club={this.clubs[this.state.currentClubIndex]}/>
             </div>
             <div className='col-1 d-flex justify-content-center align-content-center'>
               <button onClick={this.nextClub}>→</button>
             </div>
           </div>
        </div>
    );
  };
}

export default App;
