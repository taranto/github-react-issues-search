import { IssuesActions as Actions } from './types'

const INITIAL_STATE = {
    arrayTitles: [],
    arrayIssues: [],
    isIssuesLoading: false,
    isIssueTitleLoading: false
}

const reducer = (state = INITIAL_STATE, action: any) => {
    const { type, data } = action

    switch (type) {
        case Actions.ISSUES_LOAD_REQUEST:
            return {
                ...state,
                isIssuesLoading: true
            }
        case Actions.ISSUES_LOAD_SUCCESS:
            return {
                ...state,
                isIssuesLoading: false,
                ...data
            }
        case Actions.ISSUES_LOAD_FAILURE:
            return {
                ...state,
                isIssuesLoading: false
            }
        case Actions.ISSUE_TITLES_LOAD_REQUEST:
            return {
                ...state,
                isIssueTitleLoading: true
            }
        case Actions.ISSUE_TITLES_LOAD_SUCCESS:
            return {
                ...state,
                isIssueTitleLoading: false,
                ...data
            }
        case Actions.ISSUE_TITLES_LOAD_FAILURE:
            return {
                ...state,
                isIssueTitleLoading: false
            }
        default:
            return state
    }
}

export default reducer
