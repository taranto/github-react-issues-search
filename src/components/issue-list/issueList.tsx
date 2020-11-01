import React from 'react';
import { Spinner } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import './index.css';

function IssueList() {
    const { arrayIssues, isIssuesLoading } = useSelector((state: any) => state.issues)
    // console.debug('e1 ' + JSON.stringify(arrayIssues))
    return (
        <>
            {isIssuesLoading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>}
            <ListGroup>
                {arrayIssues && arrayIssues.map((issue: any) =>
                    <ListGroup.Item>{issue.title}</ListGroup.Item>
                )}
                {!arrayIssues && <ListGroup.Item>no issues found</ListGroup.Item>}
            </ListGroup>
        </>
    );
}

export default IssueList;
