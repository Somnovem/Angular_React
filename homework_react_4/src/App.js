import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RootLayout} from "./NavigationUtility/RootLayout";
import CityInfo from "./Pages/CityInfo";
import MostPopularMonument from "./Pages/MostPopularMonument";
import OtherMonuments from "./Pages/OtherMonuments";
import CityPictures from "./NavigationUtility/CityPictures";
import PictureForm from "./Pages/PictureForm";

const city = {
  name:'Mykolaiv',
  founded: 1789,
  area : '260 km2',
  population: '470,011',
  density: '1,800/km2',
  timezone: 'UTC+2',
  coords: '46°58′30″N 31°59′42″E',
  mainMonumentName: 'Statue of Saint Nicholas',
  mainMonumentUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%BC%D1%83_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8E-%D0%A7%D1%83%D0%B4%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D1%86%D1%83.jpg/1280px-%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%BC%D1%83_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8E-%D0%A7%D1%83%D0%B4%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D1%86%D1%83.jpg',
  otherMonuments: [
      {
          name: 'Музей суднобудування та флоту',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9_%D1%81%D1%83%D0%B4%D0%BD%D0%BE%D0%B1%D1%83%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D1%82%D0%B0_%D1%84%D0%BB%D0%BE%D1%82%D1%83%2C_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2.jpg/1920px-%D0%9C%D1%83%D0%B7%D0%B5%D0%B9_%D1%81%D1%83%D0%B4%D0%BD%D0%BE%D0%B1%D1%83%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D1%82%D0%B0_%D1%84%D0%BB%D0%BE%D1%82%D1%83%2C_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2.jpg'
      },
      {
          name: 'Миколаївський Будівельний Коледж',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2._%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6..JPG/1280px-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2._%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6..JPG'
      },
      {
          name: 'Миколаївський Католицький Костел',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/%D0%9A%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D1%82%D1%8C%D0%BE%D0%BB_%D1%83_%D0%BC%D1%96%D1%81%D1%82%D1%96_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2.jpg/800px-%D0%9A%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D1%82%D1%8C%D0%BE%D0%BB_%D1%83_%D0%BC%D1%96%D1%81%D1%82%D1%96_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2.jpg'
      },
      {
          name: 'Кафедральний Собор Касперовської Ікони Божої Матері',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%9A%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%9A%D0%B0%D1%81%D0%BF%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D0%B8%D0%BA%D0%BE%D0%BD%D1%8B_%D0%91%D0%BE%D0%B6%D1%8C%D0%B5%D0%B9_%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8.JPG/800px-%D0%9A%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%9A%D0%B0%D1%81%D0%BF%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D0%B8%D0%BA%D0%BE%D0%BD%D1%8B_%D0%91%D0%BE%D0%B6%D1%8C%D0%B5%D0%B9_%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8.JPG'
      },
  ],
  cityPictures: [process.env.PUBLIC_URL + '/Images/1.jpg',process.env.PUBLIC_URL + '/Images/2.jpg',process.env.PUBLIC_URL + '/Images/3.jpg',process.env.PUBLIC_URL + '/Images/4.jpg',process.env.PUBLIC_URL + '/Images/5.jpg',process.env.PUBLIC_URL + '/Images/6.jpg']
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:
        [
          {path:'/',element:<CityInfo city={city}/>},
          {path:'/mostpopularmonument',element:<MostPopularMonument city={city}/>},
          {path:'/othermonuments',element:<OtherMonuments city={city}/>},
          {path:'/citypictures',element:<CityPictures city={city}/>},
          {path:'/pictureform',element:<PictureForm/>},
        ]
  }
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App;
