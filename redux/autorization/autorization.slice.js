import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'authtoolkit',
    initialState: {
        data: null
    },
    reducers: {
        login(state){
            state.data = action.payload
        }
    }
})

export default authSlice.reducer

export default {login} = authSlice.actions