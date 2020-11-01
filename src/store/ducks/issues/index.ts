import { IssuesActions as Actions } from './types'

const INITIAL_STATE = {
    arrayTitles: ['a', 'b']
}

const reducer = (state = INITIAL_STATE, action: any) => {
    const { type, data, payload } = action
    console.log('payload', payload)
    console.log('data', data)

    switch (type) {
        case Actions.ISSUES_LOAD_REQUEST:
            return {
                isLoading: true
            }
        case Actions.ISSUES_LOAD_SUCCESS:
            return {
                isLoading: false,
                ...data
            }
        case Actions.ISSUES_LOAD_FAILURE:
            return {
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer
