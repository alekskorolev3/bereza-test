import React from 'react'
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {Navigate} from "react-router";

const ProtectedRoute = ({children}) => {
    const auth = useRecoilValue(authAtom);

    if (!auth?.authenticatedUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute
