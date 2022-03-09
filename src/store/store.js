import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../store/reducer/combineReducer"
import thunk from "redux-thunk";
export const store = createStore(reducer,applyMiddleware(thunk));
