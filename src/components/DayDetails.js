import React from 'react';
import utilsHelper from '../helpers/Utils';
import DayItem from './DayItem';

var convertKelvinToCelsius = utilsHelper.convertKelvinToCelsius;

function DayDetails(props) {
    return (
        <div className='daydetails-description-container'>
            <DayItem day={props.weather}/>
            <div className='daydetails-description-container'>
                <p>{props.city}</p>
                <br/>
                <p className='daydetails-description-text'>{props.weather.weather[0].description}</p>
                <p>Humidity: {props.weather.humidity} %</p>
                <p>Pressure: {props.weather.pressure} hPa</p>
                <p>Tmin: {convertKelvinToCelsius(props.weather.temp.min)} &deg;C</p>
                <p>Tmax: {convertKelvinToCelsius(props.weather.temp.max)} &deg;C</p>
            </div>
        </div>
    )
}

export default DayDetails;