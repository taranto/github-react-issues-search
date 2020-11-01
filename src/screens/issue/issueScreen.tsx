import React from 'react';
import './index.css';
import IssueSearchContainer from '../../components/issue-search'
import IssueListContainer from '../../components/issue-list'

function IssueScreen() {
    return (
        <>
            <IssueSearchContainer></IssueSearchContainer>
            <IssueListContainer></IssueListContainer>
        </>
    );
}

export default IssueScreen;
