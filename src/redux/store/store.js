import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../reducer/randomuserSlice";
const store = configureStore( {
    reducer: {
    users: userDataSlice.reducer,
    },
});

export default store;