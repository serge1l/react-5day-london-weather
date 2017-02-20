import React from 'react';
import GetLocationContainer from './GetLocationContainer';

class Main extends React.Component{
    render() {
        return (
            <div className='main-container'>
                <div className='main-header'>
                    <h2>Input location:</h2>
                    <GetLocationContainer direction='row'/>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;