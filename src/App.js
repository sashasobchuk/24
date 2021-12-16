import clas from './App.module.css'
import FirstPage from "./components/FirstPage/FirstPage";
import Navbar from "./components/FirstPage/Navbar/Navbar";
// import inst from "./components/Header/access/instagram 1.png";
// import clase from './components/Header/Header.module.css'
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import SecondPage from "./components/SecondPage/secondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import ForthPage from "./components/ForthPage/ForthPage";
import FifthPage from "./components/fifthPage/TopSide/FifthPage";
import Six from "./components/six/six";
import Seven from "./components/Seven/Seven";

function App() {
    return (
        <div>
            {/*<FirstPage/>*/}
            {/*<SecondPage/>*/}
            {/*<ThirdPage/>*/}
            {/*<ForthPage/>*/}
            {/*<FifthPage/>*/}
            <Six/>
            <Seven/>
        </div>
    );
}

export default App;
