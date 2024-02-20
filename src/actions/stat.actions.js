import {API} from "../helpers/const";
import {useFetchWrapper} from "../helpers/fetch-wrapper";
import {generateURL} from "../helpers/statHelpers";

export {useStatisticsActions}

function useStatisticsActions() {

    const fetchWrapper = useFetchWrapper();

    return {
        getStatistics
    }

    function getStatistics(data) {
        return fetchWrapper.get(generateURL(`${API}/stat`, data))
            .then(params => {
                return params
            })
            .catch((error) => {
                console.log(error)
            })
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(response2), 1000)
        // });
    }
}
