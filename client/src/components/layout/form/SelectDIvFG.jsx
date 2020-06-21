import React from 'react';
import { v1 as uuid } from 'uuid'
const SelectDivFG = (props) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="selectDiv">Select Divition </label><br></br>

                <select className="form-control"
                    id="selectDiv"
                    value={props.ID}
                    onChange={props.changeDivision}
                >
                    {
                        props.divs.map(item => <option key={uuid()} value={item._id} >{item.title}</option>)
                    }
                </select>
            </div>
        </>
    );
};

export default SelectDivFG;