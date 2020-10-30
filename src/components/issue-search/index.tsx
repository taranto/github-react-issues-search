import React from 'react';
import Form from 'react-bootstrap/Form';
import './index.css';

function IssueSearch() {
    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Search all issues" />
            </Form.Group>
        </Form>
    );
}

export default IssueSearch;
