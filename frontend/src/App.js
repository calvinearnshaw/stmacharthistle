import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import SMFooter from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Fixtures from "./pages/Fixtures";
import {News} from "./pages/News";

function App() {
    return (
        <div className="App">
            <Router>
                <NaviBar />
                <div className="pages">
                    <Routes>
                        <Route exact path={"/"} element={<Home />} />
                        <Route exact path={"/about/"} element={<About />} />
                        <Route exact path={"/news/"} element={<News />} />
                        <Route exact path={"/fixtures/"} element={<Fixtures />} />
                        <Route path={"/*"} element={<NotFound />} />
                    </Routes>
                </div>
                <SMFooter />
            </Router>
        </div>
    );
}

export default App;