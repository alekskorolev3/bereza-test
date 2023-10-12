import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import TechSchema from "./Components/TechSchema";
import React from "react";
import Data from "./Components/Data";
import Register from "./Components/Register";

function App() {

    return (
        <Routes>
            <Route path="/" exact={true} element={<Layout/>}>
                <Route path="/data" element={<Data />}/>
                <Route path="/schema" element={<TechSchema />}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App;
