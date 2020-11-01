import React from 'react';
import './index.css';
import { Typeahead } from 'react-bootstrap-typeahead';

function IssueSearch({ searchString, setSearchString, arraySearchOptions, setSearchStringConfirmed }: any) {
    return (
        <>
            <Typeahead
                id="basic-typeahead-single"
                //   labelKey="name"
                onInputChange={setSearchString}
                onChange={(txt) => {
                    // console.debug('a ' + txt)
                    setSearchStringConfirmed(txt)
                }}
                onKeyDown={((key: any) => {
                    // console.debug('b ' + key.code)
                    if (key.code == 'Enter') {
                        setSearchStringConfirmed(searchString)
                    }
                })}
                options={arraySearchOptions || []}
                placeholder="Search all issues"
            //   selected={singleSelections}
            />
        </>
    );
}

export default IssueSearch;



