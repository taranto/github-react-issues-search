import React from 'react';
import { Spinner } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import './index.css';
import IssueCardContainer from '../issue-card';

function IssueList() {
    const { arrayIssues, isIssuesLoading } = useSelector((state: any) => state.issues)
    return (
        <>
            {isIssuesLoading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>}
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
