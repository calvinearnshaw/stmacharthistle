import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import SMFooter from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <NaviBar />
                <div className="pages">
                    <Routes>
                        <Route exact path={"/"} element={<Home />} />
                    </Routes>
                </div>
                <SMFooter />
            </Router>
        </div>
    );
}

export default App;