
import './App.css';

import FirstPage from './compo/FirstPage';
import SecondPage from './compo/SecondPage';
import ThirdPage from './compo/ThirdPage';
import ForthPage from './compo/ForthPage';
import FifthPage from './compo/FifthPage';
import SixPage from './compo/SixPage';
import SeventhPage from './compo/SeventhPage';
import Eight from './compo/Eight';
import NinethPage from './compo/NinethPage';
import MediaDemo from './MediaDemo';





{/*import NavBar from './compo/NavBar';*/}

function App() {
  return (
    <div >
      <div>
    
     {/*<NavBar/>*/}
    

     <FirstPage/>
    <MediaDemo/>
    
    <ThirdPage/> 
    <ForthPage/>  
    <FifthPage/> 
    <SixPage/>
     <SeventhPage/>
     <Eight/>
    <NinethPage/>
  {/*<SecondPage/>*/}
    
  </div>
    </div>
  );
}

export default App;
