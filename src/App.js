import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import TechSchema from "./Components/TechSchema";
import React from "react";
import Data from "./Components/Data";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProjectParams from "./Components/ProjectParams";
import LabData from "./Components/LabData";
import User from "./Components/User";
import Statistics from "./Components/Statistics";

function App() {

    return (
        <Routes>
            <Route path="/" exact={true} element={
                <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>
            }>
                <Route path="/data" index element={
                    <Data/>
                }/>
                <Route path="/schema" element={
                    <ProtectedRoute>
                        <TechSchema />
                    </ProtectedRoute>
                }/>
                <Route path="/projectParams" element={
                    <ProtectedRoute>
                        <ProjectParams />
                    </ProtectedRoute>
                }/>
                <Route path="/labData" element={
                    <ProtectedRoute>
                        <LabData />
                    </ProtectedRoute>
                }/>
                <Route path="/statistics" element={
                    <ProtectedRoute>
                        <Statistics />
                    </ProtectedRoute>
                }/>
                <Route path="/user" element={
                    <ProtectedRoute>
                        <User />
                    </ProtectedRoute>
                }/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App;
