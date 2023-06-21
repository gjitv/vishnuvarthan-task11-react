import {} from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import productSaga from "./productSaga";


const sagaMiddleware= createSagaMiddleware();
export const store= configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);
