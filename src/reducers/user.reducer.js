import  {createSlice} from  '@reduxjs/toolkit';
const userSlice = createSlice({
    name : 'user',
    initialState : {
        loggedUser : null
    },
    reducers : {
        setLoggedUser(state , action ) {
            state.loggedUser = action.payload;
        },
        unsetLoggedUser(state, action) {
            state.loggedUser = null;
        }

    }
});

export const {setLoggedUser, unsetLoggedUser} = userSlice.actions;
export default userSlice.reducer;