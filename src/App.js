import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import TechSchema from "./Components/TechSchema";
import React from "react";
import Data from "./Components/Data";

function App() {


    return (
        <Routes>
            <Route path="/" exact={true} element={<Layout/>}>
                <Route path="/data" element={<Data />}/>
                <Route path="/schema" element={<TechSchema />}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default App;
