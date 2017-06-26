import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // Note, google maps js is linked on index.html
        // This is a pattern for dealing with 3rd party libraries
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;
