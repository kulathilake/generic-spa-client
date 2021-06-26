import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types/user';
import { AuthState } from './types/types';
 
const initState: AuthState = {
    session:{
        loggedInAt: null,
        user: null
    }
};

 
const authSlice = createSlice({
    initialState: initState,
    name: 'auth',
    reducers:{
        setCurrentSession(state,{payload}){
            state.session = {
                loggedInAt: new Date(),
                user: payload as User
            }
        }
    },
});

export const {setCurrentSession} = authSlice.actions;

export default authSlice.reducer;