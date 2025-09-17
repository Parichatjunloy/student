import {createBrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Forgetpass from "./pages/Forgetpass";
import Status from "./pages/Status";
import Datastu from "./pages/Datastu";
import Stepone from "./pages/Stepone";
import Steptwo from "./pages/Steptwo";
import Stepthree from "./pages/Stepthree";
import Stepfour from "./pages/Stepfour";
import Stepfive from "./pages/Stepfive";
import Linescan from "./pages/Linescan";
import Homeadmin from "./pages/Homeadmin";
import Loginadmin from "./pages/Loginadmin";
import Courseadmin from "./pages/Courseadmin";
import Pluscourse from "./pages/Pluscourse";
import Pvccaha from "./pages/Pvccaha";
import Delete from "./pages/Delete";
import Pvcfear from "./pages/Pvcfear";
import Pvcaahan from "./pages/Pvcaahan";
import Pvcvichit from "./pages/Pvcvichit";
import Manageadmin from "./pages/Manageadmin";
import Manageuse from "./pages/Manageuse";
import Dmanageu from "./pages/Dmanageu";
import Dmanagea from "./pages/Dmanagea";
import Ditelmanage from "./pages/Ditelmanage";

const App = createBrowserRouter([
  {
    index: true, 
    path: "/",
    element: <Home />,
  },
  {
    index: true, 
    path: "/Home",
    element: <Home />,
  },
  {
    index: true, 
    path: "/Login",
    element: <Login />,
  },
  {
    index: true, 
    path: "/Member",
    element: <Member />,
  },
  {
    index: true, 
    path: "/Forgetpass",
    element: <Forgetpass />,
  },
  {
    index: true, 
    path: "/Status",
    element: <Status />,
  },
  {
    index: true, 
    path: "/Datastu",
    element: <Datastu />,
  },
  {
    index: true, 
    path: "/Linescan",
    element: <Linescan />,
  },
  {
    index: true, 
    path: "Stepone",
    element: <Stepone />,
  },
  {
    index: true, 
    path: "Steptwo",
    element: <Steptwo />,
  },
  {
    index: true, 
    path: "Stepthree",
    element: <Stepthree />,
  },
  {
    index: true, 
    path: "Stepfour",
    element: <Stepfour />,
  },
  {
    index: true, 
    path: "Stepfive",
    element: <Stepfive />,
  },
  {
    index: true, 
    path: "Homeadmin",
    element: <Homeadmin />,
  },
  {
    index: true, 
    path: "/Loginadmin",
    element: <Loginadmin />,
  },
  {
    index: true, 
    path: "/Courseadmin",
    element: <Courseadmin />,
  },
  {
    index: true, 
    path: "/Pluscourse",
    element: <Pluscourse />,
  },
  {
    index: true, 
    path: "/Pvccaha",
    element: <Pvccaha />,
  },
  {
    index: true, 
    path: "/Delete",
    element: <Delete />,
  },
  {
    index: true, 
    path: "/Pvcfear",
    element: <Pvcfear />,
  },
  {
    index: true, 
    path: "/Pvcaahan",
    element: <Pvcaahan />,
  },
  {
    index: true, 
    path: "/Pvcvichit",
    element: <Pvcvichit />,
  },
  {
    index: true, 
    path: "/Manageadmin",
    element: <Manageadmin />,
  },
  {
    index: true, 
    path: "/Manageuse",
    element: <Manageuse />,
  },
  {
    index: true, 
    path: "/Dmanageu",
    element: <Dmanageu />,
  },
  {
    index: true, 
    path: "/Dmanagea",
    element: <Dmanagea />,
  },
  {
    index: true, 
    path: "/Ditelmanage",
    element: <Ditelmanage />,
  }
  
]);

export default App;
