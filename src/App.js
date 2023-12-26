import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import TechSchema from "./Components/TechSchema";
import React from "react";
import Data from "./Components/Data";
import Register from "./Components/Register";
// import ProtectedRoute from "./Components/ProtectedRoute";
import ProjectParams from "./Components/ProjectParams";
import LabData from "./Components/LabData";
import User from "./Components/User";
import Statistics from "./Components/Statistics";
import ModuleManagementAirflow from "./Components/ModuleManagementAirflow";
import ModulePerformanceInnerRecycle from "./Components/ModulePerformanceInnerRecycle";
import AirSupplyForecast from "./Components/AirSupplyForecast";
import SludgeStationForecast from "./Components/SludgeStationForecast";

function App() {

    return (
        <Routes>
            <Route path="/" exact={true} element={
                // <ProtectedRoute>
                //     <Layout/>
                // </ProtectedRoute>
                <Layout/>
            }>
                <Route path="/data" index element={
                    <Data/>
                }/>
                <Route path="/schema" element={
                    // <ProtectedRoute>
                    //     <TechSchema />
                    // </ProtectedRoute>
                    <TechSchema />
                }/>
                <Route path="/projectParams" element={
                    // <ProtectedRoute>
                    //     <ProjectParams />
                    // </ProtectedRoute>
                    <ProjectParams />
                }/>
                <Route path="/labData" element={
                    // <ProtectedRoute>
                    //     <LabData />
                    // </ProtectedRoute>
                    <LabData />
                }/>
                <Route path="/managementAirflow" element={
                    // <ProtectedRoute>
                    //     <ModuleManagementAirflow />
                    // </ProtectedRoute>
                    <ModuleManagementAirflow />
                }/>

                <Route path="/performanceInnerRecycle" element={
                    <ModulePerformanceInnerRecycle />
                }/>

                <Route path="/statistics" element={
                    // <ProtectedRoute>
                    //     <Statistics />
                    // </ProtectedRoute>
                    <Statistics />
                }/>
                <Route path="/user" element={
                    // <ProtectedRoute>
                    //     <User />
                    // </ProtectedRoute>
                    <User />
                }/>
                <Route path="/airSupplyForecast" element={
                    // <ProtectedRoute>
                    //     <User />
                    // </ProtectedRoute>
                    <AirSupplyForecast/>
                }/>

                <Route path="/sludgeStationForecast" element={
                    // <ProtectedRoute>
                    //     <User />
                    // </ProtectedRoute>
                    <SludgeStationForecast/>
                }/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App;
