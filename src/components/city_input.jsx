import React from 'react';

class CityInput extends React.Component {
    constructor() {
        super();
        
        this.state = {
            city: ""
        };
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value});
        };
    }

    render() {
        return (
            <form>
                <label>
                    Find Restaurants Near
                    <input
                        type="text"
                        placeholder="city name"
                        onChange={this.update("city")} />
                </label>
            </form>
        );
    }
}

export default CityInput;