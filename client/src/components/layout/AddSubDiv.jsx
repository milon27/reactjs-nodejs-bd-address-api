import React, { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import DivForm from './DivForm';
import { context } from '../../contexts/AppContext';


const AddSubDiv = () => {

    const { divs, divs_dispatch } = useContext(context);
    const [ID, setID] = useState(divs.length > 0 ? divs[0]._id : "");


    useEffect(() => {

        const getvis = async () => {
            axios.get('/api/DIVISIONS/')
                .then((res) => {
                    const divs = res.data;
                    setID(divs[0]._id);
                    divs_dispatch({
                        type: "GET_DIVS",
                        payload: {
                            all_div: divs
                        }
                    });
                }).catch(e => {
                    console.log(e)
                });
        }
        //lets do some caching...

        if (divs.length > 0) {
            console.log("use effect from DivForm.jsx:already loaded all divisions ")
        } else {
            console.log("use effect from DivForm.jsx:loading all divisions again")
            getvis();
        }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <DivForm ID={ID} setID={setID} divs={divs} />
            </div>
            <Footer />
        </>
    );
};

export default AddSubDiv;