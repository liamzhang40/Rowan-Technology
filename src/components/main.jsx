import React from 'react';
import { fetchRestaurants } from '../utils/yelp_api_util';
import CityInput from './city_input';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            city: ""
        };
    }

    componentDidMount() {
        fetchRestaurants("New York");
    }

    render() {
        return (
            <div>
                <CityInput setParentState={ city => this.setState({ city })} />
            </div>
        );
    }
}

export default Main;