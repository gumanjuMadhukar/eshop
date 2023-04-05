import { configureStore } from '@reduxjs/toolkit';
import rootReducers from "./reducer";
import  {legacy_createStore as createStore} from 'redux'


const store = createStore(rootReducers);


// const Store = configureStore({
//   reducer: rootReducers,
//   middleware: [/* array of middleware */],
//   devTools: process.env.NODE_ENV !== 'production',
// });

export default store;