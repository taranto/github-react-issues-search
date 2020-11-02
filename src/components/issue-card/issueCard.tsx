import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './index.css';
import Container from 'react-bootstrap/Container';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Badge } from 'react-bootstrap';

function IssueCard({ issue }: any) {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    const timeAgoCreatedAt = timeAgo.format(new Date(issue.createdAt))
    return (
        <>
            <Card>
                <Container fluid>
                    <Row >
                        <Col >
                            <Card.Body>
                                <Card.Title
                                    className={'pointer'}
                                    onClick={() => window.open(issue.url)}
                                >
                                    {issue.title} <span className="card-subinfo">{`#${issue.number}`}</span>
                                </Card.Title>
                                <Card.Text className={'max-lines'}>
                                    {issue.body}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Text className="card-subinfo" >
                                    <img className={'avatar'} src={issue.author?.avatarUrl}></img>
                                    <span
                                        className={'pointer'}
                                        onClick={() => window.open(issue.author?.url)}
                                    >
                                        {` ${issue.author.login}`}
                                    </span>
                                    {` created ${timeAgoCreatedAt}. ${issue.state} `}
                                    {issue?.labels?.edges?.map((anEdge: any) => {
                                        return <Badge pill variant="secondary">{anEdge.node.name}</Badge>
                                    })}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
}

export default IssueCard;
