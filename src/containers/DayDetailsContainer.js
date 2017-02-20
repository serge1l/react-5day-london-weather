import React from 'react';
import Detail from '../components/DayDetails';

class DayDetailsContainer extends React.Component{

    render() {
        return (
            <Detail
                weather={this.props.location.state.weather}
                city={this.props.routeParams.city}/>
        );
    }
}

export default DayDetailsContainer;