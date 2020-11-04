import React, { useEffect, useState } from 'react';
import IssueSearch from './issueSearch'
import { useDispatch, useSelector } from 'react-redux';
import { getIssues, getIssueTitles } from '../../store/ducks/issues/actions';

function IssueSearchContainer() {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState('')
    const [searchStringConfirmed, setSearchStringConfirmed] = useState('')

    const arrayTitles = useSelector((state: any) => state.issues.arrayTitles)
    const isIssuesLoading = useSelector((state: any) => state.issues.isIssuesLoading)

    useEffect(() => {
        if (!(searchString === '' && (!arrayTitles || arrayTitles.length === 0))) {
            dispatch(getIssueTitles(searchString))
        }
    }, [searchString, dispatch])

    useEffect(() => {
        dispatch(getIssues(searchStringConfirmed))
    }, [searchStringConfirmed, dispatch])

    return (
        <IssueSearch
            searchString={searchString}
            setSearchString={setSearchString}
            arraySearchOptions={arrayTitles}
            setSearchStringConfirmed={setSearchStringConfirmed}
            isIssuesLoading={isIssuesLoading}
        />
    );
}

export default IssueSearchContainer;
