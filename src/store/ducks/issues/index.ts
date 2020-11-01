import { IssuesActions as Actions } from './types'

const INITIAL_STATE = {
    arrayTitles: [],
    arrayIssues: []
}

const reducer = (state = INITIAL_STATE, action: any) => {
    const { type, data, payload } = action

    switch (type) {
        case Actions.ISSUES_LOAD_REQUEST:
            return {
                isIssueLoading: true
            }
        case Actions.ISSUES_LOAD_SUCCESS:
            return {
                isIssueLoading: false,
                ...data
            }
        case Actions.ISSUES_LOAD_FAILURE:
            return {
                isIssueLoading: false
            }
        case Actions.ISSUE_TITLES_LOAD_REQUEST:
            return {
                isIssueTitleLoading: true
            }
        case Actions.ISSUE_TITLES_LOAD_SUCCESS:
            return {
                isIssueTitleLoading: false,
                ...data
            }
        case Actions.ISSUE_TITLES_LOAD_FAILURE:
            return {
                isIssueTitleLoading: false
            }
        default:
            return state
    }
}

export default reducer
