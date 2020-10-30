import {
    createStore,
    combineReducers
} from 'redux'

import Issues from './ducks/issues'

const reducer = combineReducers({
    issues: Issues
})

const store = createStore(
    reducer
)

export default store
