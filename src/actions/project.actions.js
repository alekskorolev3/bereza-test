import {useRecoilValue, useSetRecoilState} from 'recoil';

import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {projectAtom} from "../state/project";
import {useNavigate} from "react-router";
import {authAtom} from "../state/auth";

export {useProjectActions};

function useProjectActions() {
    const auth = useRecoilValue(authAtom);
    const fetchWrapper = useFetchWrapper();
    const setProjectParams = useSetRecoilState(projectAtom);
    const navigate = useNavigate();

    return {
        postProjectParams,
        getProjectParams,
        getAllParams
    }

    function postProjectParams(params) {
        params.modified_by = auth?.authenticatedUser.id

        console.log(auth)

        return fetchWrapper.post(`http://192.168.1.136:8000/api/post_proj_value`, params)
            .then(projectParam => {
                const data = {data: [projectParam.data_bbo_1, projectParam.data_bbo_2, projectParam.data_bbo_3, projectParam.data_bbo_4]}
                localStorage.setItem('project', JSON.stringify(data.data));
                setProjectParams(data.data);
                return data.data
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

    function getProjectParams(id) {
        return fetchWrapper.get(`http://192.168.1.136:8000/api/get_proj_value`, {bbo_id: id})
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

    function getAllParams() {
        return fetchWrapper.get(`http://192.168.1.136:8000/api/get_all_proj_value`)
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
