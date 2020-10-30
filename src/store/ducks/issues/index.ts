import { IssuesActions as Actions } from './types'

const INITIAL_STATE = {
}

const reducer = (state = INITIAL_STATE, action: any) => {
    const { type } = action

    switch (type) {
        case Actions.ISSUES_LOAD_REQUEST:
        case Actions.ISSUES_LOAD_SUCCESS:
        case Actions.ISSUES_LOAD_FAILURE:
        default:
            return state
    }
}

export default reducer
