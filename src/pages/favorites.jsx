
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {getByKey} from '../utils/localstorage'
import List from "../components/list";




const Favorites = () => {

    const [imageList, setImageList] = useState([]);
    const history = useHistory();


    const getList = () => {
        setImageList([...getByKey('favorite_images')]);
    }

    const goToSearch = () => {
        history.push('/');
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="page">
            <div className="topnav goup">
                <div className="search-container">
                    <input id='favorites' type="button" className="searchbutton" onClick={goToSearch} value="Search"/>

                </div>
            </div>


            <List imageList={imageList} />
        </div>
    );
}





export default Favorites;