import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './index.css';

function IssueBreadcumb() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="https://github.com?"><img className={'avatar'} src={'https://github.githubassets.com/favicons/favicon.svg'} alt={'Github'}></img></Breadcrumb.Item>
            <Breadcrumb.Item href="https://github.com/facebook">Facebook</Breadcrumb.Item>
            <Breadcrumb.Item href="https://github.com/facebook/react">React</Breadcrumb.Item>
            <Breadcrumb.Item active>Issues</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default IssueBreadcumb;
