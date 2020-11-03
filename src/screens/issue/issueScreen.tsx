import React from 'react';
import './index.css';
import IssueSearchContainer from '../../components/issue-search'
import IssueListContainer from '../../components/issue-list'
import IssueBreadcumbContainer from '../../components/issue-breadcumb';

function IssueScreen() {
    return (
        <>
            <IssueBreadcumbContainer></IssueBreadcumbContainer>
            <IssueSearchContainer></IssueSearchContainer>
            <IssueListContainer></IssueListContainer>
        </>
    );
}

export default IssueScreen;
