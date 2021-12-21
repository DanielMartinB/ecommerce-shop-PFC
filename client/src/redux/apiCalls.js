import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutStart, logoutSuccess, logoutFailure } from "./userRedux"
import { publicRequest } from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login", user)
        console.log(res.data)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const logout = async (dispatch) => {
    try {
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart())

    try {
        const res = await publicRequest.post("/auth/register", user)
        dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFailure())
    }
}