
import React, {useEffect, useState, useRef} from 'react';
import { useHistory  } from 'react-router-dom';
import axios from "axios";
import {getByKey, setByKey} from '../utils/localstorage'
import List from "../components/list";


const Search = () => {

   const [searchValue, setSearchValue] = useState("");
   const [imageList, setImageList] = useState([]);
   const refTopNav = useRef();
   const history = useHistory();

   const search = async () => {
       const response = await axios.get(
           `https://pixabay.com/api/?key=${
               process.env.REACT_APP_PIXABAY_API_KEY
           }&q=${searchValue || ''}&per_page=120&image_type=photo`
       )
       setImageList(response.data.hits);
       refTopNav.current.classList.add('goup');
   }

    const handleSearchKeyUp = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }


   const goToFavorites = () => {
       history.push('/favorites');
   }


    useEffect(() => {
        if(!getByKey('favorites')){
            setByKey('favorites', []);
        }
        if(!getByKey('favorite_images')){
            setByKey('favorite_images', []);
        }
    }, []);

    return (
      <div className="page">
          <div className="topnav" ref={refTopNav}>
              <div className="search-container">
                  <input id='favorites' type="button" className="searchbutton" onClick={goToFavorites} value="favorites"/>
                  <input
                      id='searchinput' type="text" placeholder="Search.." name="search"
                      value={searchValue} onChange={e=> setSearchValue(e.target.value)}
                      onKeyUp={handleSearchKeyUp}
                  />
                  <input id='searchbutton' type="button" className="searchbutton" value="Search" onClick={search}/>
              </div>
          </div>

          <List imageList={imageList} />
      </div>
    );
}





export default Search;