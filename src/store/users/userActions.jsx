import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const registerUserAction = createAsyncThunk("register/user", async userData => {
    try {
        const { data: { result } } = await api.post("/user/register", userData)
        localStorage.setItem("user", JSON.stringify({ userLogin: result }))
        return result
    } catch (error) {
        return error.response.data.message || error.message
    }

})
export const addEventAction = createAsyncThunk("event/add", async userData => {
    try {
        const { data: { result } } = await api.post("/user/add-event", userData)
        return result
    } catch (error) {
        return error.response.data.message || error.message
    }

})

export const getEventAction = createAsyncThunk("event/get", async userDate => {
    try {
        const { data: { result } } = await api.get(`/user/get-event/${userDate}`)
        return result
    } catch (error) {
        return error.response.data.message || error.message
    }

})

export const userLoginAction = createAsyncThunk("login/user", async loginData => {
    try {
        const { data: { result } } = await api.post("/auth/user/login", loginData)
        localStorage.setItem("user", JSON.stringify({ userLogin: result }))
        return result
    } catch (error) {
        console.log(error)
        return error.response.data.message || error.message
    }

})
