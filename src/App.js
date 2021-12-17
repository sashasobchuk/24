import clas from './App.module.css'
import FirstPage from "./components/FirstPage/FirstPage";
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
        <div className={clas.allPages}>
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            <ForthPage/>
            <FifthPage/>
            <Six/>
            <Seven/>
        </div>
    );
}

export default App;
