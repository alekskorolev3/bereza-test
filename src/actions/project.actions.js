import {useRecoilValue} from 'recoil';

import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {authAtom} from "../state/auth";

export {useProjectActions};

function useProjectActions() {
    const auth = useRecoilValue(authAtom);
    const fetchWrapper = useFetchWrapper();
    return {
        postProjectParams,
        getAllParams
    }

    async function postProjectParams(params) {
        params.modified_by = auth?.authenticatedUser.id

        return await fetchWrapper.post(`http://192.168.1.136:8000/api/post_proj_value`, params)
            .then(projectParam => {
                return projectParam
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // async function getProjectParams(id) {
    //     return await fetchWrapper.get(`http://192.168.1.136:8000/api/get_proj_value`, {bbo_id: id})
    //         .then(params => {
    //             return params
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    function getAllParams() {
        return fetchWrapper.get(`http://192.168.1.136:8000/api/get_all_proj_value`)
            .then(params => {
                return params
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
