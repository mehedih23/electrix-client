import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class GMap extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        lat: 25.936289,
                        lng: 88.853532
                    }}
                >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBrU-4dBLnlC9AFCf6hcv1zxt12R7ADTVs")
})(GMap)