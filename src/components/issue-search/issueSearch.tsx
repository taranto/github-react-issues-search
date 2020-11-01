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
                onInputChange={setSearchString}
                onKeyDown={((key: any) => {
                    if (key.code === 'Enter') {
                        setSearchStringConfirmed(searchString)
                        setMenuOpen(false)
                    } else {
                        setMenuOpen(undefined)
                    }
                })}
                open={isMenuOpen}
                options={arraySearchOptions}
                placeholder="Search all issues"
            />
        </>
    );
}

export default IssueSearch;



