import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = (props) => {
    return (
        <div>
           <TextField 
            variant="outlined"
            {...props}
            placeholder={props.placeholder}
            /> 
        </div>
    );
};

export default Search;