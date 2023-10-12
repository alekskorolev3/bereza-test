import {useSetRecoilState} from 'recoil';

import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {authAtom} from "../state/auth";
import {useNavigate} from "react-router";

export {useUserActions};

function useUserActions() {
    const fetchWrapper = useFetchWrapper();
    const setAuth = useSetRecoilState(authAtom);
    const navigate = useNavigate();

    return {
        login,
        register,
        logout,
    }

    function login(username, password) {
        return fetchWrapper.post(`http://192.168.1.136:8000/login`, {username, password})
            .then(user => {
                console.log(user)
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user);
                return user
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
    }

    function register(username, password) {
        return fetchWrapper.post(`http://192.168.1.136:8000/register`, {username, password})
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((err) => console.log(err))
    }

    function logout() {
        localStorage.removeItem('user');
        setAuth(null);
        navigate("/login")
    }
}
