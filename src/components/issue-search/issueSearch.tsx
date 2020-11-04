import React from 'react';
import './index.css';
import { Typeahead } from 'react-bootstrap-typeahead';

function IssueSearch({ searchString, setSearchString, arraySearchOptions, setSearchStringConfirmed, isIssuesLoading }: any) {
    return (
        <>
            <Typeahead
                id="basic-typeahead-single"
                onInputChange={(txt) => {
                    setSearchString(txt)
                }}
                onChange={(txt: string | any) => { //if a selection happens, then it's not a onChange(:string)
                    if (txt instanceof String) {
                        setSearchString(txt)
                    } else if (txt instanceof Array && txt[0] && txt[0].label !== undefined) {
                        setSearchString(txt[0].label)
                    } else if (txt instanceof Array) {
                        setSearchString(txt[0])
                    }
                }}
                onKeyDown={((key: any) => {
                    if (key.code === 'Enter') {
                        //@ts-ignore 
                        const inputTextType = document.getElementsByClassName('rbt-input-main')[0].value
                        setSearchStringConfirmed(inputTextType || searchString)
                    }
                })}
                autoFocus
                caseSensitive={false}
                defaultOpen={false}
                open={undefined}
                options={arraySearchOptions}
                placeholder="Search all issues"
                isLoading={isIssuesLoading}
                allowNew={true}
                newSelectionPrefix={''}
                emptyLabel="No search suggestions to make yet"
                //@ts-ignore - @types were not up to date with the lib
                shouldSelect={() => false}
            />

        </>
    );
}

export default IssueSearch;



