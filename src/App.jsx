import {createBrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Yuem from "./pages/Yuem";
import Khuen from "./pages/Khuen";
import Phawad from "./pages/Phawad";
import Adminhome from "./pages/Adminhome";
import Adminphawad from "./pages/Adminphawad";
import Samacik from "./pages/Samacik";


const App = createBrowserRouter([
  {
    index: true, 
    path: "/",
    element: <Login />,
  },
  {
    index: true, 
    path: "/Home",
    element: <Home />,
  },
  {
    index: true, 
    path: "Login",
    element: <Login />,
  },
  {
    index: true, 
    path: "Member",
    element: <Member />,
  },
  {
    index: true, 
    path: "Yuem",
    element: <Yuem />,
  },
  {
    index: true, 
    path: "Khuen",
    element: <Khuen />,
  },
  {
    index: true, 
    path: "Phawad",
    element: <Phawad />,
  },
  {
    index: true, 
    path: "Adminhome",
    element: <Adminhome />,
  },
  {
    index: true, 
    path: "Adminphawad",
    element: <Adminphawad />,
  },
  {
    index: true, 
    path: "Samacik",
    element: <Samacik />,
  }

  
]);

export default App;
