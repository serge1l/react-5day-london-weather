import React from 'react';

var PropTypes = React.PropTypes;

function GetLocation(props) {
    return (
        <div style={{flexDirection: props.direction || 'column'}} className='getlocation-input-div'>
            <InputField
                onUpdateLocation={props.onUpdateLocation}
                city={props.city}/>
            <Button
                onSubmitLocation={props.onSubmitLocation}>
                Get Forecast
            </Button>
        </div>
    )
}

function Button(props) {
    return (
        <button type='button'
                className='getlocation-btn-10'
                onClick={props.onSubmitLocation}>
            {props.children}
        </button>
    )
}

function InputField(props) {
    return (
        <input
            className='form-control'
            onChange={props.onUpdateLocation}
            placeholder='City, State'
            type='text'
            value={props.city}/>
    )
}

GetLocation.propTypes = {
    direction: PropTypes.string,
    onSubmitLocation: PropTypes.func.isRequired,
    onUpdateLocation: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
};

export default GetLocation;