import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import TechSchema from "./Components/TechSchema";
import React from "react";
import Data from "./Components/Data";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {

    return (
        <Routes>
            <Route path="/" exact={true} element={
                <Layout/>
            }>
                <Route path="/data" index element={
                    <Data/>
                }/>
                <Route path="/schema" element={
                    <ProtectedRoute>
                        <TechSchema />
                    </ProtectedRoute>
                }/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App;
