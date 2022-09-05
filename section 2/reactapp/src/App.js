import{BrowserRouter, Route, Routes,Link} from"react-router-dom";
import EventHandling from "./components/EventHandling";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ToDo from "./components/ToDo";
import Contactus from "./components/Contactus";
import Register from "./components/Register";
import UserManager from "./components/UserManager";
function App() {
  return (
    <div>
    {/* <h1>my react app</h1> */}
      
      
      <BrowserRouter>
      {/* <Link to="/homepage">homepage</Link>
      <Link to="/loginpage">login</Link> */}
      <Header/>

      <Routes>
      <Route element={<Home></Home>} path="/"/>
        <Route element={<Home></Home>} path="homepage"/>
       
         <Route element={<Login></Login>} path="loginpage"/>
         <Route element={<EventHandling></EventHandling>} path="eventhandling"/>
         <Route element={<ToDo></ToDo>} path="todo"/>
         <Route element={<Contactus/>} path="contact"/>
         <Route element={<Register></Register>} path="registerpage"/>
         <Route element={<UserManager/>} path="usermanager"/>
        <Route element={<NotFound/>} path="*"/>
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
