import React, {useEffect, useState} from 'react';
import {getByKey, setByKey} from "../utils/localstorage";

const List = (props) => {

    const imageList = props.imageList;
    const [favorites, setFavorites] = useState(getByKey('favorites') || []);
    const [favoriteImages, setFavoriteImages] = useState(getByKey('favorite_images') || []);

    const addToFavorites = (id, i) => {
        setFavorites(prevFavorites => [id, ...prevFavorites])
        setFavoriteImages(prevFavoriteImages => [i, ...prevFavoriteImages])
    }

    const removeFromFavorites = (id) => {
        setFavorites(prevFavorites => prevFavorites.filter(f => f !== id));
        setFavoriteImages(prevFavoriteImages => prevFavoriteImages.filter(f => parseInt(f.id) !== parseInt(id)));
    }

    const toggleFavorite= (e) =>{

        const classList = [...e.target.classList];
        const id = e.target.closest('.img-box').id;

        if(classList.includes("liked")){
            e.target.classList.remove("liked");
            removeFromFavorites(id)
        }else{
            e.target.classList.add("liked");
            addToFavorites(id, imageList.find(i => i.id === parseInt(id)));
        }

    }

    useEffect(() => {
        setByKey('favorites', favorites);
        setByKey('favorite_images', favoriteImages);
    }, [favorites, favoriteImages]);


    return (
        <div className="gallery-image">
            {
                imageList.map(i => {
                    return (
                        <div id={i.id} key={i.id} className="img-box">
                            <img src={i.previewURL} alt=""/>
                            <div className="transparent-box">
                                <div className="caption">
                                    <div name={i.id}
                                         className={(favorites.includes(i.id.toString()))? "heart-like-button liked": "heart-like-button"}
                                         onClick={toggleFavorite} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;