import React from 'react';
import utilsHelper from '../helpers/Utils';

var getDate = utilsHelper.getDate,
    PropTypes = React.PropTypes;

function DayItem(props) {
    var date = getDate(props.day.dt);
    var icon = props.day.weather[0].icon;
    return (
        <div className='dayitem-day-container' onClick={props.handleClick}>
            <img className='dayitem-weather' src={'./images/weather-icons/' + icon + '.svg'} alt='Weather'/>
            <h2 className='dayitem-subheader'>{date}</h2>
        </div>
    )
}

DayItem.propTypes = {
    day: PropTypes.shape({
        dt: PropTypes.number.isRequired,
        weather: PropTypes.array.isRequired,
    }).isRequired,
    handleClick: PropTypes.func
}

export default DayItem;