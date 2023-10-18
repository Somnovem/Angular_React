import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Biography} from "./Pages/Biography";
import {MostFamousPaintings} from "./Pages/MostFamousPaintings";
import {PaintingsCollection} from "./Pages/PaintingsCollection";
import {RootLayout} from "./RootLayout";
import {Home} from "./Pages/Home";
import PersonalPage from "./Pages/PersonalPage";
import ReactForm from "./Pages/ReactForm";

let person = {
  fullname: 'Zhmura Artem Anatoliyovich',
  phone: '+380969510899',
  email: 'artem.zhmura606@gmail.com',
  location: 'Mykolaiv',
  exp: 'No comercial experience',
  skills: 'Stable,Committed,Ambitious',
  selfieUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78i7lYRyRkoX2Ibphasd6H9ByNyNbpIFOjL-A%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=ee392b262ef2c68c5f074d960a07f656b842a321d39a91d8761723aa0828df6b&ipo=images'
};

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:
        [
          {path:'/',element:<Home/>},
          {path:'/biography',element:<Biography/>},
          {path:'/famousPainting',element:<MostFamousPaintings/>},
          {path:'/paintingsCollection/:id?',element:<PaintingsCollection/>},
          {path:'/personal',element:<PersonalPage person={person}/>},
          {path:'/form',element:<ReactForm/>}
        ]
  }
]);

function App() {

  return <RouterProvider router={router}/>
}

export default App;
