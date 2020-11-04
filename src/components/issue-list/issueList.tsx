import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';
import IssueCardContainer from '../issue-card';

function IssueList({ arrayIssues, isIssuesLoading }: any) {
    return (
        <>
            <ListGroup>
                {!isIssuesLoading && arrayIssues && arrayIssues.map((issue: any) =>
                    <ListGroup.Item key={issue.number}>
                        <IssueCardContainer issue={issue} ></IssueCardContainer>
                    </ListGroup.Item>
                )}
                {!isIssuesLoading && !arrayIssues && <ListGroup.Item>no issues found</ListGroup.Item>}
            </ListGroup>
        </>
    );
}

export default IssueList;
