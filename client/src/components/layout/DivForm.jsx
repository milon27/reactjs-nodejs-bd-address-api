import React, { useState, useContext } from 'react';
import { context } from '../../contexts/AppContext'
import SelectDivFG from './form/SelectDIvFG';
import axios from 'axios';
import SubDivList from './SubDivList';
import InputTextFG from './form/InputTextFG';

const DivForm = (props) => {
    //props
    const { divs, ID, setID } = props;

    //context
    const { subDivs_dispatch } = useContext(context);

    //local state
    const [sub_div_title, setSubDivTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({ success: false, error: false });

    //local method
    const changeDivision = (e) => {
        setID(e.target.value);
    }
    const onSubDivChanged = (e) => {
        setSubDivTitle(e.target.value);
    }
    //on submit button
    const submit = async (e) => {
        console.log("DivForm.jsx adding a new sub-division")
        e.preventDefault();
        setLoading(true);
        const obj = {
            div_id: ID,
            title: sub_div_title
        }
        setSubDivTitle("");
        //call axios backend
        axios.post('/api/SUB_DIVISIONS', obj)
            .then(res => {
                setLoading(false);
                setResponse({ success: true, error: false });
                //call the dispatch
                subDivs_dispatch({
                    type: "ADD_SUB_DIV",
                    payload: {
                        new_sub_div: obj
                    }
                });
            })
            .catch(e => {
                setLoading(false);
                setResponse({ success: false, error: true });
                console.log(e);
            });
    }

    return (<>
        <div className="row">
            <div className="col-md-12">
                <h2 className="text-center">Add Sub Divitions</h2>

                {response.success ?
                    <div className="alert alert-success">
                        <strong>Success!</strong> successfully added new Sub Division.
                    </div> : ''}

                {response.error ?
                    <div className="alert alert-danger">
                        <strong>Erorr!</strong> Failed to add new Sub Division.
                    </div> : ''}

                {loading ?
                    <div className="progress">
                        <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                        </div>
                    </div> : ''}

                <form onSubmit={submit}>
                    <SelectDivFG divs={divs} ID={ID} changeDivision={changeDivision} />
                    <InputTextFG value={sub_div_title} onChange={onSubDivChanged} />
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
        <div className="row">
            <SubDivList divs={divs} ID={ID} />
        </div>
    </>);
};

export default DivForm; 