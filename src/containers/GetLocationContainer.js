import React from 'react';
import GetLocation from '../components/GetLocation';

var PropTypes = React.PropTypes;

class GetLocationContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            city: ''
        };
        this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
        this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    }

    handleSubmitLocation(e) {
        e.preventDefault();
        this.context.router.push('/forecast/' + this.state.city);
    }

    handleUpdateLocation(e) {
        this.setState({
                city: e.target.value
            }
        );
    }

    render() {
        return (
            <GetLocation
                direction={this.props.direction}
                onSubmitLocation={this.handleSubmitLocation}
                onUpdateLocation={this.handleUpdateLocation}
                city={this.state.city}/>
        )
    }
}

GetLocationContainer.propTypes = {
    direction: function() { PropTypes.string }
};

GetLocationContainer.contextTypes = {
    router: function() { React.PropTypes.func.isRequired }
};

GetLocationContainer.defaultProps = {
    direction: function() { 'column' }
};

export default GetLocationContainer;
