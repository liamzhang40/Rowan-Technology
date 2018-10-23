import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { fetchRestaurants } from '../utils/yelp_api_util';

class RestaurantIndex extends React.Component {
    constructor() {
        super();

        this.state = {
            sortby: "",
            order: ""
        };
        this.offset = 0;
    }

    update(category) {
        return e => {
            this.setState({
                sortby: category,
                order: e.currentTarget.value
            });
        };
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.city !== this.props.city) {
            this.offset = 0;
        }
    }

    handleClick(pageNumber) {
        return () => {
            this.offset = (pageNumber - 1) * 20;  
            fetchRestaurants(this.props.city, this.offset).then( response => {
                this.props.setParentState(response.businesses);
            });
        };
    } 

    render() {
        const { restaurants } = this.props;
        const radio = ["price", "rating"].map((category, idx) => (
            <li key={idx}>
                <span className="sort-titles">
                    {`sort by ${category}:`}
                </span>
                {["low to high", "high to low"].map((order, idx2) => (
                    <label key={idx2}>{order}
                        <input
                            value={order}
                            onChange={this.update(category)}
                            type="radio"
                            name="sort" />
                    </label>
                ))}
            </li>
        ));

        if (this.state.order === "low to high") {
            restaurants.sort((a, b) => {
                if (a[this.state.sortby] === undefined && b[this.state.sortby] === undefined) {
                    return 0;
                } else if (a[this.state.sortby] === undefined) {
                    return -1;
                } else if (b[this.state.sortby] === undefined) {
                    return 1;
                } else if (typeof a[this.state.sortby] === "number") {
                    return a[this.state.sortby] - b[this.state.sortby];
                } else if (typeof a[this.state.sortby] === "string") {
                    return a[this.state.sortby].length - b[this.state.sortby].length;                
                }
            });
        } else if (this.state.order === "high to low") {
            restaurants.sort((a, b) => {
                if (a[this.state.sortby] === undefined && b[this.state.sortby] === undefined) {
                    return 0;
                } else if (a[this.state.sortby] === undefined) {
                    return 1;
                } else if (b[this.state.sortby] === undefined) {
                    return -1;
                } else if (typeof a[this.state.sortby] === "number") {
                    return b[this.state.sortby] - a[this.state.sortby];
                } else if (typeof a[this.state.sortby] === "string") {
                    return b[this.state.sortby].length - a[this.state.sortby].length;
                }
            });
        }

        const list = restaurants ? restaurants.map((restaurant, idx) => (
            <RestaurantIndexItem 
                key={idx} 
                restaurant={restaurant}/>
        )) :
        [];
    
        const page = new Array(10).fill().map((el, idx) => (
            <li 
                key={idx} 
                onClick={this.handleClick(idx + 1)}
                className={this.offset / 20 === idx ? "selected-page" : ""}>
                <span>{idx + 1}</span>
            </li>
        ));

        return (
            <div className="restaurant-container">
                { restaurants && 
                    <ul className="sort-options">
                        {radio}
                    </ul>
                }
                <ul className="restaurant-index">
                    {list}
                </ul>
                { restaurants &&
                    <div className="page-bottom">
                        <span>Pages:</span>
                        <ul className="page-numbers">
                            {page}
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default RestaurantIndex;