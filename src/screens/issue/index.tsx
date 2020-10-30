import React from 'react';
import './index.css';
import IssueSearch from './../../components/issue-search'
import IssueList from './../../components/issue-list'

function IssueScreen() {
    return (
        <>
            <IssueSearch></IssueSearch>
            <IssueList></IssueList>
        </>
    );
}

export default IssueScreen;
