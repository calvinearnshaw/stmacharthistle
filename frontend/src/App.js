import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";

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
            </Router>
        </div>
    );
}

export default App;