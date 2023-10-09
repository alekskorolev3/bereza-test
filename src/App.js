import './App.css';
import Header from "./Components/Header";
import Data from "./Components/Data";
import Menu from "./Components/Menu";
import {
    Route, Routes
} from "react-router-dom";
import TechSchema from "./Components/TechSchema";

function App() {


    return (
        <div className="container">
            <Menu/>
            <div className="innerContainer">
                <Header/>
                <Routes>
                    <Route
                        path="/"
                        exact={true}
                        element={<Data />}
                    />

                    <Route
                        path="/schema"
                        element={<TechSchema />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App;
