import React from 'react';
import IssueCard from './issueCard'

function IssueCardContainer({ issue }: any) {
    return (
        <IssueCard issue={issue} ></IssueCard>
    );
}

export default IssueCardContainer;
