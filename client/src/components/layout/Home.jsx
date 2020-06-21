import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import Header from './Header';
import Footer from './Footer';
import { context } from '../../contexts/AppContext';
import SelectDivFG from '../layout/form/SelectDIvFG'
import SubDivList from './SubDivList';

const Home = () => {
    const { divs, divs_dispatch } = useContext(context);
    const [ID, setID] = useState(divs.length > 0 ? divs[0]._id : "");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getvis = async () => {
            setLoading(true);
            axios.get('/api/DIVISIONS/')
                .then((res) => {
                    const divs = res.data;
                    setID(divs[0]._id);
                    setLoading(false);
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
            console.log("use effect from Home.jsx:already loaded all divisions ")
        } else {
            console.log("use effect from Home.jsx:loading all divisions again")
            getvis();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const changeDivision = (e) => {
        setID(e.target.value);
    }


    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {loading ?
                            <div className="progress">
                                <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                </div>
                            </div> : ''}

                        <form>
                            <SelectDivFG divs={divs} ID={ID} changeDivision={changeDivision} />
                        </form>
                    </div>
                </div>
                <div className="row">
                    <SubDivList divs={divs} ID={ID} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;