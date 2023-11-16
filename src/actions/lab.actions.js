import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {useRecoilValue} from "recoil";
import {authAtom} from "../state/auth";
import {API} from "../helpers/const";

export {useLabDataActions};

function useLabDataActions() {
    const auth = useRecoilValue(authAtom);
    const fetchWrapper = useFetchWrapper();

    return {
        postLabData,
        getAllParams
    }


    function postLabData(params) {
        params.modified_by = auth?.authenticatedUser.id

        return fetchWrapper.post(`${API}/post_lab_value`, params)
            .then(data => {
                console.log(data)
                return data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function getAllParams() {
        return fetchWrapper.get(`${API}/get_all_lab_value`)
            .then(params => {
                return params
            })
            .catch((error) => {
                console.log(error)
            })
    }


}
