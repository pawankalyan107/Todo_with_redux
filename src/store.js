import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer,reducer1 } from "./reducer";

const middleWare = [thunk];
// console.log(applyMiddleware(...middleWare), thunk)
const rootReducer = combineReducers({
    firstReducer:reducer,
    secondReducer:reducer1
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);



export default store;
