import { IssuesActions as Actions } from './types'

export const loadRequest = () =>
    ({ type: Actions.ISSUES_LOAD_REQUEST })
export const loadFailure = () =>
    ({ type: Actions.ISSUES_LOAD_FAILURE })
export const loadSuccess = () =>
    ({ type: Actions.ISSUES_LOAD_SUCCESS })
