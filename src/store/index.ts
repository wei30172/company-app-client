import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(sagaMiddleware, logger),
});

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
