import { createSlice } from "@reduxjs/toolkit"
import { addEventAction, getEventAction, registerUserAction, userLoginAction } from "./userActions"


const localData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {}


const userSlice = createSlice({
    name: "users",
    initialState: {
        user: localData, allEvents: []

    },
    reducers: {
        logout(state) {
            localStorage.removeItem("user")
            state.user = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(registerUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userRegistered = true
                state.user = payload
                state.toggle = !state.toggle
            })
            .addCase(registerUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.userRegisterError = payload
            })
            .addCase(addEventAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addEventAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.eventAdded = true
                state.toggle = !state.toggle
            })
            .addCase(addEventAction.rejected, (state, { payload }) => {
                state.loading = false
                state.userRegisterError = payload
            })
            .addCase(getEventAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getEventAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allEvents = payload
                state.toggle = !state.toggle
            })
            .addCase(getEventAction.rejected, (state, { payload }) => {
                state.loading = false
                state.usereventsError = payload
            })

            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
                state.toggle = !state.toggle
                state.login = true
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.userLoginError = payload
            })






    }

})
export default userSlice.reducer
export const { logout } = userSlice.actions
