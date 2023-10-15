import './App.css';
import DynamicStylesFunc from "./Components/DynamicStylesFunc";
import Celebrity from "./Components/Celebrity";
import DynamicStylesClass from "./Components/DynamicStylesClass";
import QuoteGenerator from "./Components/QuoteGenerator";

function App() {
  const celeb = {
      name: 'Andrzej Sapkowski',
      birthday: '21.07.1948',
      biography: 'Andrzej Sapkowski is a Polish fantasy writer, essayist, translator and a trained economist. He is best known for his six-volume series of books The Witcher, which revolves around the eponymous "witcher," a monster-hunter, Geralt of Rivia. It began with the publication of Sword of Destiny (1992), and was completed with the publication of standalone prequel novel Season of Storms (2013). The saga has been popularized through television, stage, comic books, video games and translated into 37 languages making him the second most-translated Polish science fiction and fantasy writer after Stanisław Lem.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Andrzej_Sapkowski_-_Lucca_Comics_and_Games_2015_2.JPG/330px-Andrzej_Sapkowski_-_Lucca_Comics_and_Games_2015_2.JPG'
  };
  return (
    <div id='main-wrapper'>
      <h1>Task 1</h1>
      <DynamicStylesFunc/>
      <hr/>
      <h1>Task 2</h1>
      <Celebrity {...celeb}/>
      <hr/>
      <h1>Task 3</h1>
      <DynamicStylesClass/>
      <hr/>
      <h1>Task 4</h1>
      <QuoteGenerator quote='Life before death. Strength before weakness. Path before destination.' author='Brandon Sanderson'/>
      <hr/>
    </div>
  );
}

export default App;
