import React, { useEffect, useState } from 'react';
import './index.css';
import IssueSearch from './issueSearch'
import { useDispatch, useSelector } from 'react-redux';
import { getIssues, getIssueTitles } from '../../store/ducks/issues/actions';

function IssueSearchContainer() {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState({})
    // const [arraySearchOptions, setArraySearchOptions] = useState({})
    const [searchStringConfirmed, setSearchStringConfirmed] = useState({})

    const arrayTitles = useSelector((state: any) => state.issues.arrayTitles)
    console.debug(arrayTitles)
    useEffect(() => {
        dispatch(getIssueTitles(searchString))
    }, [searchString, dispatch])

    useEffect(() => {
        dispatch(getIssues(searchStringConfirmed))
    }, [searchStringConfirmed])

    return (
        <IssueSearch
            searchString={searchString}
            setSearchString={setSearchString}
            arraySearchOptions={arrayTitles}
            searchStringConfirmed={searchStringConfirmed}
            setSearchStringConfirmed={setSearchStringConfirmed}
        />
    );
}

export default IssueSearchContainer;
