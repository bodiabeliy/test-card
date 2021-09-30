import React from 'react';
import {FormControl, Select, MenuItem} from '@material-ui/core'

const SelectField = ({options, defaultValue, userChose, UserChange }) => {
    return (
        <div>
            <FormControl>
                <Select 
                    value={userChose}
                    onChange={event => UserChange(event.target.value)}
                >
                <MenuItem disabled>{defaultValue}</MenuItem>
                    {options.map(option =>
                     <MenuItem 
                        value={option.type} 
                        key={option.type}
                        >
                            {option.category}
                        </MenuItem>
                    )}
                    
                </Select>
            </FormControl> 
        </div>
    );
};

export default SelectField;