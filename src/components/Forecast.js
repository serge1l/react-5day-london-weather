import React from 'react';
import DayItem from './DayItem';

var PropTypes = React.PropTypes;

function Forecast(props) {
    return (
        <div>
            {
                props.isLoading === true
                    ? <h1 className='forecast-header'> Loading </h1>
                    : <ForecastUI
                        city={props.city}
                        forecast={props.forecastData}
                        handleClick={props.handleClick}/>
            }
        </div>
    )
}

function ForecastUI(props) {
    return (
        <div className='forecast-top-container'>
            <h1 className='forecast-header'>{props.city}</h1>
            <p className='forecast-subheader'></p>
            <div className='forecast-container'>
                {props.forecast.list.map(function (listItem) {
                    return <DayItem key={listItem.dt} day={listItem}
                                    handleClick={props.handleClick.bind(null, listItem)}/>
                })}
            </div>
        </div>
    )
}

Forecast.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Forecast;