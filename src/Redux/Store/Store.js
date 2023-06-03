import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import MainReducer from "../Reducer/RootReducer";
import storage from "redux-persist/lib/storage";
import localForage from "localforage";

const persistConfig = {
    key: "userdata",
    storage: localForage,
};
const pReducer = persistReducer(persistConfig, MainReducer);

const middleware = applyMiddleware(logger);

const store = createStore(pReducer);

const persistor = persistStore(store);

export default store;
export { persistor };
