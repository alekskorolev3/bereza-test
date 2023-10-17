import {useSetRecoilState} from 'recoil';

import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {projectAtom} from "../state/project";
import {useNavigate} from "react-router";

export {useProjectActions};

function useProjectActions() {
    const fetchWrapper = useFetchWrapper();
    const setProjectParams = useSetRecoilState(projectAtom);
    const navigate = useNavigate();

    return {
        // login,
        // register,
        // logout,
    }

    function postProjectParams(params) {
        return fetchWrapper.post(`http://192.168.1.136:8000/api/post_proj_value`, params)
            .then(user => {
                console.log(user)
                localStorage.setItem('user', JSON.stringify(user));
                setProjectParams(user);
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

    function getProjectParams() {
        return fetchWrapper.get(`http://192.168.1.136:8000/api/get_proj_value`)
            .then(params => {
                console.log(params)
                setProjectParams(params);
                return params
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

    function postLabData(params) {
        return fetchWrapper.post(`http://192.168.1.136:8000/api/post_lab_value`, params)
            .then(user => {
                console.log(user)
                localStorage.setItem('user', JSON.stringify(user));
                setProjectParams(user);
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

    function getProjectParams() {
        return fetchWrapper.get(`http://192.168.1.136:8000/api/get_proj_value`)
            .then(params => {
                console.log(params)
                setProjectParams(params);
                return params
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

}
