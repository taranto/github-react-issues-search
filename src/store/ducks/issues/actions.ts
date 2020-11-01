import { IssuesActions as Actions } from './types'
import githubService from './../../../services'

export const loadRequest = () =>
    ({ type: Actions.ISSUES_LOAD_REQUEST })
export const loadFailure = () =>
    ({ type: Actions.ISSUES_LOAD_FAILURE })
export const loadSuccess = (data: any) =>
    ({ type: Actions.ISSUES_LOAD_SUCCESS, data })

//  ({ type: Actions.ISSUES_LOAD_SUCCESS, data })
export const getIssueTitles = (filter: any) => {
    console.log('t')
    return (dispatch: any) => {
        // const graphQLQuery = {
        //     query: `query Issues { repository(owner:"Facebook", name:"React") {
        //     issues(last:20) {
        //         edges {
        //             node {
        //               title
        //               url
        //               labels(first:5) {
        //                 edges {
        //                   node {
        //                     name
        //                   }
        //                 }
        //               }
        //             }
        //         }
        //     }
        // } }`}
        const graphQLQuery = {
            query: `{
                search(query: "repo:Facebook/React in:title ${filter}", type: ISSUE, first: 10) {
                  nodes {
                    ... on Issue {
                      number
                      title
                      url
                      state
                    }
                  }
                }
              }`
        }
        dispatch(loadRequest())
        githubService(graphQLQuery).then((result: any) => {
            console.log('result ' + JSON.stringify(result))
            const arrayTitles = result?.data?.data.search.nodes.filter((aNode: any) => !!aNode.title).map((aNode: any) => aNode.title)
            dispatch(loadSuccess({ arrayTitles }))

            console.log('arrayTitles ' + JSON.stringify(arrayTitles))
        }).catch((e: any) => {
            dispatch(loadFailure())
        })
    }
}

