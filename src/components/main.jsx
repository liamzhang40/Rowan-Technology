import React from 'react';
import CityInput from './city_input';
import RestaurantIndex from './restaurant_index';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            city: null,
            restaurants: null
        };
    }

    render() {
        return (
            <div className="background">
                <CityInput 
                    setParentState={ (restaurants, city) => this.setState({ restaurants, city })} />
                <RestaurantIndex 
                    city={this.state.city}
                    restaurants={this.state.restaurants} 
                    setParentState={restaurants => this.setState({ restaurants })} />
            </div>
        );
    }
}

export default Main;