// import { createStore } from "redux";
// import rootReducer from "../reducers";

// export default function configureStore(preloadedState) {
//     return createStore(rootReducer, preloadedState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// }

//2 Redux Thunk
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(preloadedState) {
    const enhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
    const cEnhancers = enhancers(applyMiddleware(thunk));
    return createStore(rootReducer, preloadedState, cEnhancers);
}