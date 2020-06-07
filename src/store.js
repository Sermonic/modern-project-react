import { createStore, combineRedicers } from "redux";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const rootReducer = combineRedicers(reducers);

export const configureStore = () => createStore(rootReducer);
