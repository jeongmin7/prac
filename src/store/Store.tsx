import { createStore } from "redux";
import rootReducer from "./Root";

const store = createStore(rootReducer);
console.log(store.getState());

export default store;
