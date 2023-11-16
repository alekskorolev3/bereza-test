import {useRecoilValue} from 'recoil';

import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {authAtom} from "../state/auth";
import {API} from "../helpers/const";

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

        return await fetchWrapper.post(`${API}/post_proj_value`, params)
            .then(projectParam => {
                return projectParam
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function getAllParams() {
        return fetchWrapper.get(`${API}/get_all_proj_value`)
            .then(params => {
                return params
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
