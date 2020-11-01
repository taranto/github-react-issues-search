import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunk from "redux-thunk";
import Issues from './ducks/issues'
import logger from "redux-logger"

const reducer = combineReducers({
    issues: Issues
})

const enhancer = compose(
    applyMiddleware(thunk, logger)
);

const store = createStore(
    reducer,
    enhancer
)

export default store
