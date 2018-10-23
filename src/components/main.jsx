import React from 'react';
import CityInput from './city_input';
import RestaurantIndex from './restaurant_index';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            restaurants: null
        };
    }

    render() {
        return (
            <div className="background">
                <CityInput setParentState={ restaurants => this.setState({ restaurants })} />
                <RestaurantIndex restaurants={this.state.restaurants} />
            </div>
        );
    }
}

export default Main;