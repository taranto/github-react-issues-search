import { IssuesActions as Actions } from './types'
import githubService from '../../../services/github'

export const loadIssuesRequest = () =>
    ({ type: Actions.ISSUES_LOAD_REQUEST })
export const loadIssuesFailure = () =>
    ({ type: Actions.ISSUES_LOAD_FAILURE })
export const loadIssuesSuccess = (data: any) =>
    ({ type: Actions.ISSUES_LOAD_SUCCESS, data })

export const loadIssueTitlesRequest = () =>
    ({ type: Actions.ISSUE_TITLES_LOAD_REQUEST })
export const loadIssueTitlesFailure = () =>
    ({ type: Actions.ISSUE_TITLES_LOAD_FAILURE })
export const loadIssueTitlesSuccess = (data: any) =>
    ({ type: Actions.ISSUE_TITLES_LOAD_SUCCESS, data })

export const getIssues = (filter: any) => {
    return (dispatch: any) => {
        // console.debug('c')
        const graphQLQuery = {
            query: `{
                search(query: "repo:Facebook/React in:title ${filter}", type: ISSUE, first: 10) {
                    nodes {
                        ... on Issue {
                            number
                            title
                            url
                            state
                            labels(first:5) {
                                edges {
                                    node {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }`
        }
        dispatch(loadIssuesRequest())
        githubService(graphQLQuery).then((result: any) => {
            const arrayIssues = result?.data?.data.search.nodes.filter((aNode: any) => !!aNode.title)
            console.debug('d' + JSON.stringify(arrayIssues))
            dispatch(loadIssuesSuccess({ arrayIssues }))
        }).catch((e: any) => {
            dispatch(loadIssuesFailure())
        })
    }
}




export const getIssueTitles = (filter: any) => {
    return (dispatch: any) => {
        if (!filter) {
            dispatch(loadIssueTitlesSuccess({ arrayTitles: [] }))
            return
        }
        const graphQLQuery = {
            query: `{
                search(query: "repo:Facebook/React in:title ${filter}", type: ISSUE, first: 10) {
                    nodes {
                        ... on Issue {
                            title
                        }
                    }
                }
            }`
        }
        dispatch(loadIssueTitlesRequest())
        githubService(graphQLQuery).then((result: any) => {
            const arrayTitles = result?.data?.data.search.nodes.filter((aNode: any) => !!aNode.title).map((aNode: any) => aNode.title)
            dispatch(loadIssueTitlesSuccess({ arrayTitles }))
        }).catch((e: any) => {
            dispatch(loadIssueTitlesFailure())
        })
    }
}

