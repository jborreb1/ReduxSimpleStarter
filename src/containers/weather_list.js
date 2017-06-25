import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        );  
    };
}

function mapStateToProps({ weather }) {
    return({ weather });
    //This is ES6 syntax -- equivalent to passing "state" as an argument into the function and returning "{ weather: state.weather }"
}

export default connect(mapStateToProps)(WeatherList);