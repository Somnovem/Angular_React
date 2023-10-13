import './App.css';
import Film from "./Components/film";
import Biography from "./Components/biography";
import Clock from "./Components/clock";
import Pet from "./Components/pet";

function App() {
  let film = {
      title: 'The Lord of the Rings: Two Towers',
      director: 'Peter Jackson',
      release: '2002',
      studio: 'New Line Cinema',
      plot: 'Awakening from a dream of Gandalf fighting the Balrog in Moria, Frodo Baggins finds himself, along with Samwise Gamgee, lost in the Emyn Muil near Mordor. They discover that they are being tracked by Gollum, a former bearer of the One Ring. Capturing Gollum, Frodo takes pity and allows him to guide them, reminding Sam that they will need Gollum\'s help to infiltrate Mordor.',
      posterUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FS%2Fpv-target-images%2F2549100c99181dbdaf0f5d4fe3f37a31d53dd14c5d754a72243882da9d2afb76._RI_V_TTW_.jpg&f=1&nofb=1&ipt=32ee722a64441a5921f9ba615de62cfd4895ccc5b54b43f16834b02904d737f8&ipo=images'
  };
  let person = {
      fullname: 'Zhmura Artem Anatoliyovich',
      phone: '+380969510899',
      email: 'artem.zhmura606@gmail.com',
      location: 'Mykolaiv',
      exp: 'No comercial experience',
      skills: 'Stable,Committed,Ambitious',
      selfieUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78i7lYRyRkoX2Ibphasd6H9ByNyNbpIFOjL-A%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=ee392b262ef2c68c5f074d960a07f656b842a321d39a91d8761723aa0828df6b&ipo=images'
  };
  let pet = {
      name: 'Kaladin',
      age: '2 years',
      sex: 'Male',
      weight: '1.2lbs',
      photoUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-07I_d9u11aw%2FUsBHkoazU6I%2FAAAAAAAAFsU%2FmTCTfER8PUI%2Fs1600%2FChinchilla-Animals-Pictures.jpg&f=1&nofb=1&ipt=5aafdfac045679035b2a18bdae762392db47019ccba5af1ac37e9106130d2a2c&ipo=images'
  };
  return (
    <div>
      <Film film={film}/>
      <Biography person={person}/>
      <Clock/>
      <Pet pet={pet}/>
    </div>
  );
}

export default App;
