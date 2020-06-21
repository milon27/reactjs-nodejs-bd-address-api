import React from 'react';

const InputTextFG = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="sdiv">Enter Sub-Divition Name:</label>
            <input type="sdiv" value={props.value} className="form-control" id="sdiv" onChange={props.onChange} />
        </div>
    );
};

export default InputTextFG;