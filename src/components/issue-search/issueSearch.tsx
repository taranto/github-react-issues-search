import React, { useState } from 'react';
import './index.css';
import { Typeahead } from 'react-bootstrap-typeahead';

function IssueSearch({ searchString, setSearchString, arraySearchOptions, setSearchStringConfirmed }: any) {
    const [isMenuOpen, setMenuOpen] = useState<boolean>()
    return (
        <>
            <Typeahead
                autoFocus
                id="basic-typeahead-single"
                onInputChange={(txt) => {
                    console.log('onInputChange ' + txt)
                    setSearchString(txt)
                }}
                onChange={(txt) => {
                    console.log('onInputChange ' + txt)
                    setSearchString(txt)
                }}
                onKeyDown={((key: any) => {
                    if (!isMenuOpen && key.code === 'Enter') {
                        console.log('onKeyDown menu open ' + searchString)
                        setSearchStringConfirmed(searchString)
                    }
                    if (isMenuOpen && key.code === 'Enter') {
                        console.log('onKeyDown menu clos ' + searchString)
                        setMenuOpen(false)
                    } else {
                        setMenuOpen(undefined)
                    }
                })}
                selectHintOnEnter={true}
                open={isMenuOpen}
                options={arraySearchOptions}
                placeholder="Search all issues"
            />
        </>
    );
}

export default IssueSearch;



