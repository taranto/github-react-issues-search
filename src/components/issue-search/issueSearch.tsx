import React from 'react';
import './index.css';
import { Typeahead } from 'react-bootstrap-typeahead';

function IssueSearch({ searchString, setSearchString, arraySearchOptions, setArraySearchOptions }: any) {
    return (
        <>
            <Typeahead
                id="basic-typeahead-single"
                //   labelKey="name"
                onInputChange={setSearchString}
                // onChange={(txt) => {
                //     console.log(txt)
                //     setSearchString(txt)
                // }}
                options={arraySearchOptions || []}
                placeholder="Search all issues"
            //   selected={singleSelections}
            />
        </>
    );
}

export default IssueSearch;



