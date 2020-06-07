import { createStore, combineRedicers } from "redux";

const reducers = {};

const rootReducer = combineRedicers(reducers);

export const configureStore = () => createStore(rootReducer);
