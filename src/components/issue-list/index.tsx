import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';

function IssueList() {
    return (
        <ListGroup>
            <ListGroup.Item>an issue</ListGroup.Item>
            <ListGroup.Item>another issue</ListGroup.Item>
            <ListGroup.Item>one more issue</ListGroup.Item>
        </ListGroup>
    );
}

export default IssueList;
