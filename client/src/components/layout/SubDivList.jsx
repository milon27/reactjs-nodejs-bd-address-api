import React, { useEffect, useContext } from 'react';
import { v1 as uuid } from 'uuid';
import { context } from '../../contexts/AppContext';
import axios from 'axios';

const SubDivList = (props) => {

    const { ID, divs } = props;
    const { subDivs, subDivs_dispatch } = useContext(context);

    useEffect(() => {

        const id = divs.length > 0 ? ID : "";

        console.log("use effect from: SubDivList.jsx ", `/api/SUB_DIVISIONS/div_id/${id}`);

        const loadSubDivs = async () => {
            axios.get(`/api/SUB_DIVISIONS/div_id/${ID}`)
                .then(res => {
                    const sub_divs = res.data;
                    subDivs_dispatch({
                        type: "GET_SUB_DIVS",
                        payload: {
                            all_sub_div: sub_divs
                        }
                    });
                })
                .catch(e => {
                    console.log("error from SubDivList.jsx", e)
                });
        }
        loadSubDivs();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ID]);


    const getSelecteDivdTitle = (id) => {
        if (ID === "" || ID == null) {
            return "Not Selected"
        } else {
            return divs.filter(div => div._id === id)[0].title
        }
    }

    return (

        <div className="col-md-12">
            <h3>Division : {
                divs.length > 0 ? getSelecteDivdTitle(ID) + " " : ""
            }
            </h3>
            <h5>
                Total Sub Division : {subDivs.length > 0 ? subDivs.length : "No Sub Divisions Found"}
            </h5>
            < ul className="list-group" >
                {
                    subDivs.length > 0 ?
                        subDivs.map(item => <li key={uuid()} className="list-group-item">{item.title}</li>) : `No Sub Divisions Found For Selected Divisions`
                }
            </ul >
        </div>



    );
};

export default SubDivList;