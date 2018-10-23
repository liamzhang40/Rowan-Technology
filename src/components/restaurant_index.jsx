import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
    constructor() {
        super();

        this.state = {
            sortby: "",
            order: ""
        };
    }

    update(category) {
        return e => {
            this.setState({
                sortby: category,
                order: e.currentTarget.value
            });
        };
    }

    render() {
        const { restaurants } = this.props;
        const radio = ["price", "rating"].map((category, idx) => (
            <li key={idx}>
                {`sort by ${category}:`}
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

        if (restaurants) {
            restaurants.sort((a, b) => a.rating > b.rating);
        }
        // if (this.state.order === "low to high") {
        //     restaurants.sort((a, b) => a[this.state.sortby] < b[this.state.sortby]);
        // } else if (this.state.order === "high to low") {
        //     restaurants.sort((a, b) => a[this.state.sortby] > b[this.state.sortby]);
        // }

        const list = restaurants ? restaurants.map((restaurant, idx) => (
            <RestaurantIndexItem 
                key={idx} 
                restaurant={restaurant}/>
        )) :
        [];
        

        return (
            <div className="restaurant-container">
                { restaurants && 
                    <ul className="sort-options">
                        {radio}
                    </ul>
                }
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default RestaurantIndex;