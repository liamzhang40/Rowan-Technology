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
                    <span>price: {restaurant.price}</span>
                    <span>rating: {restaurant.rating}</span>
                </div>
            </div>
        </li>
    );
};

export default RestaurantIndexItem;