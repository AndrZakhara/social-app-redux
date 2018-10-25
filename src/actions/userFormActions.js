import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const ENTRY_TYPE_LOGIN = 'ENTRY_TYPE_LOGIN';
export const ENTRY_TYPE_SIGNUP = 'ENTRY_TYPE_SIGNUP';

export const REGISTRY_REQUEST = 'REGISTRY_REQUEST';
export const REGISTRY_SUCCESS = 'REGISTRY_SUCCESS';
export const REGISTRY_FAIL = 'REGISTRY_FAIL';

export const LOGOUT = 'LOGOUT';

export function handleLogin(user) {
    console.log(user);
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
        });

        axios.post('http://localhost:8000/api/auth/login', user)
        .then(function (response) {
            console.log(response);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.body.token,
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: LOGIN_FAIL,
                error: true,
                payload: new Error('Ошибка авторизации'),
            })
        });
    }
  }

export function handleRegistry() {
    return function(dispatch) {
        dispatch({
            type: REGISTRY_REQUEST,
        });
      
        if (true) {
            let username = 'Register User';

            dispatch({
                type: REGISTRY_SUCCESS,
                payload: username,
                })
        } else {
            dispatch({
                type: REGISTRY_FAIL,
                error: true,
                payload: new Error('Ошибка авторизации'),
            })
        } 
    }
  }

export function handleLogout() {
    return { type: LOGOUT};
}

export function handleTypePageEntry(value) {
    console.log(value);
    if(value === 'login') {
        return {
            type: ENTRY_TYPE_LOGIN
        }
    } else {
        return {
            type: ENTRY_TYPE_SIGNUP
        }
    }

}