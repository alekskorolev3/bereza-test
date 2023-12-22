import { useRecoilState } from 'recoil';

import {authAtom} from "../state/auth";

export { useFetchWrapper };

function useFetchWrapper() {
    const [auth, setAuth] = useRecoilState(authAtom);

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };

    function request(method) {
        return (url, body) => {
            const requestOptions = {
                method,
                headers: authHeader(url)
            };
            if (body) {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.body = JSON.stringify(body);
            }

            console.log(requestOptions)

            return fetch(url, requestOptions).then(handleResponse);
        }
    }
    
    function authHeader() {
        const token = auth?.token;
        const isLoggedIn = !!token;
        if (isLoggedIn) {
            return { Authorization: `Bearer ${token}` };
        } else {
            return {};
        }
    }
    
    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            
            if (!response.ok) {
                if ([401, 403].includes(response.status) && auth?.token) {
                    localStorage.removeItem('user');
                    setAuth(null);
                    // history.push('/login');
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }    
}
