import React, { useEffect, useState } from 'react';
import './index.css';
import IssueSearch from './issueSearch'
import { useDispatch, useSelector } from 'react-redux';
import { getIssueTitles } from '../../store/ducks/issues/actions';

function IssueSearchContainer() {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState({})
    // const [arraySearchOptions, setArraySearchOptions] = useState({})
    const [searchStringConfirmed, setSearchStringConfirmed] = useState({})

    const arrayTitles = useSelector((state: any) => state.issues.arrayTitles)
    console.log('a')
    useEffect(() => {
        console.log('b', searchString)
        dispatch(getIssueTitles(searchString))
    }, [searchString, dispatch])

    return (
        <IssueSearch
            // searchString={searchString}
            setSearchString={setSearchString}
            arraySearchOptions={arrayTitles}
            // setArraySearchOptions={setArraySearchOptions}
            searchStringConfirmed={searchStringConfirmed}
            setSearchStringConfirmed={setSearchStringConfirmed}
        />
    );
}

export default IssueSearchContainer;
