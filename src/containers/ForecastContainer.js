import React from 'react';
import Forecast from '../components/Forecast';
import apiHelper from '../helpers/OpenWeatherMapAPI';
import utilsHelper from '../helpers/Utils';

var getForecastPayload = apiHelper.getForecastPayload,
    getCurrentLocation = utilsHelper.getCurrentLocation;

class ForecastContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isLoading: true,
            forecastData: {}
        }
    }

    componentDidMount() {
        this.makeRequest(getCurrentLocation(this))
    }

    makeRequest(city) {
        getForecastPayload(city)
            .then(function (forecastData) {
                this.setState({
                    isLoading: false,
                    forecastData: forecastData
                });
            }.bind(this));
    }

    handleClick(weather) {
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            state: {
                weather: weather
            }
        })
    }

    render() {
        return (
            <Forecast
                city={getCurrentLocation(this)}
                isLoading={this.state.isLoading}
                handleClick={this.handleClick}
                forecastData={this.state.forecastData}/>
        )
    }
}

ForecastContainer.contextTypes = {
    router: function() {  React.PropTypes.object.isRequired }
};

export default ForecastContainer;