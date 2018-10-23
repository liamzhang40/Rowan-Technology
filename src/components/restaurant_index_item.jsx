import React from 'react';

const RestaurantIndexItem = ({ restaurant }) => {
    return (
        <li className="restaurant-index-item">
            <div>
                <div className="img-container">
                    <img src={restaurant.image_url}/>
                </div>
                <div className="detail-container">
                    <a href={restaurant.url} target="_blank">{restaurant.name}</a>
                    <span>{restaurant.price}</span>
                    <span>{restaurant.rating}</span>
                </div>
            </div>
        </li>
    );
};

export default RestaurantIndexItem;