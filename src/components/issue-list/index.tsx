import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import IssueList from './issueList'

function IssueListContainer() {
    const { arrayIssues, isIssuesLoading } = useSelector((state: any) => state.issues)
    return (
        <IssueList arrayIssues={arrayIssues} isIssuesLoading={isIssuesLoading} ></IssueList>
    );
}

export default IssueListContainer;
