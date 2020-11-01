import React from 'react';
// import Card from 'react-bootstrap/Card';
import './index.css';

function IssueCard({ issue }: any) {
    return (
        <>
            {issue.title}
            {/* <Card>
                <Card.Body>
                    <Card.Title>{issue.title}</Card.Title>
                    <Card.Text>
                        {issue.body}
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </>
    );
}

export default IssueCard;
