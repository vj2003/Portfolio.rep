import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello/hello';
 import { Congratstask } from "./components/congratstask/congratstask"
 import { Superover } from "./components/superoverleague/superover"
 import { Social } from "./components/socialbutton/social"
 import { Notification } from './components/notification/notification';
import { Login } from './components/login/login';
import { Card } from './components/technologycard/card'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Reuse } from "./components/Reusablebanner/reuse";
 import { Feed } from "./components/feedback/feed";
 import { Thankpage } from './components/feedback/thankpage';
 import { Hooks } from './components/Hooksassignment/Hooks';
 import { Fruits } from './components/fruitscounter/fruits';
 import { Datefunction } from './components/datetask/date';
import { Jsondata } from './components/jsondata/json';
import { Portfolio } from './components/portfolio/portfolio';
import  Homes from './components/portfolio/Home';
import { About } from './components/portfolio/about';
import { Certifications } from './components/portfolio/certificate';
import { Education } from './components/portfolio/education';
import { Project } from './components/portfolio/project';
import { Skills } from './components/portfolio/skills';
import { Contact } from './components/portfolio/contact';
import { Css } from './components/portfolio/css';
import { Bootstrap } from './components/portfolio/bootstrap';



function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/Hello" element={[<Reuse/>,<Hello/>]}></Route>
      <Route path="/Congratstask" element={[<Reuse/>,<Congratstask/>]}></Route>
      <Route path="/Superover" element={[<Reuse/>,<Superover/>]}></Route>
      <Route path="/Social" element={[<Reuse/>,<Social/>]}></Route>
      <Route path="/Notification" element={[<Reuse/>,<Notification/>]}></Route>
      <Route path="/Login" element={[<Reuse/>,<Login/>]}></Route>
      <Route path="/Card" element={[<Reuse/>,<Card/>]}></Route>
      <Route path="/Feed" element={[<Reuse/>,<Feed/>]}></Route>
      <Route path="/Thankpage" element={[<Reuse/>,<Thankpage/>]}></Route>
      <Route path="/Hooks" element={[<Reuse/>,<Hooks/>]}></Route>
      <Route path="/Fruits" element={[<Reuse/>,<Fruits/>]}></Route>
      <Route path="/Datefunction" element={[<Reuse/>,<Datefunction/>]}></Route>
      <Route path="/Jsondata" element={[<Reuse/>,<Jsondata/>]}></Route>
      <Route path ="/home" element= {[<Portfolio/>,<Homes/>]}/>
      <Route path ="/about" element= {[<Portfolio/>,<About/>]}/>
      <Route path ="/Certifications" element= {[<Portfolio/>,<Certifications/>]}/>
      <Route path ="/Education" element= {[<Portfolio/>,<Education/>]}/>
      <Route path ="/Project" element= {<Reuse/>}/>
      <Route path ="/Skills" element= {[<Portfolio/>,<Skills/>]}/>
      <Route path ="/Homes" element= {[<Portfolio/>,<Homes/>]}/>
      <Route path ="/Contact" element= {[<Portfolio/>,<Contact/>]}/>
      <Route path='/Css' element={[<Portfolio/>,<Css/>]}/>
      <Route path='/Bootstrap' element={[<Portfolio/>,<Bootstrap/>]}/>
      <Route path ="/" element= {[<Portfolio/>,<Homes/>,<About/>,<Certifications/>,<Education/>,<Skills/>,<Contact/>]}/>
      
      
      


      
      
     
    </Routes>
    </BrowserRouter>
  
    </>


  );
}

export default App;
