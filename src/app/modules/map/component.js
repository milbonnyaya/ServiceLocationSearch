import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const LocationSearchGoogleMap = withGoogleMap((props) => {

    return (<GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 33.832571033, lng: -117.9185910 }}
        onClick={props.onMapClick}>

        {props.addressesList.map((address, index) => {

            let newMarker = {
                position: {
                    lat: address.lat,
                    lng: address.lng,
                },
                key: index,
                defaultAnimation: 2
            };

            return (<Marker
                {...newMarker}
                onClick={() => props.onMarkerClick(address)}
                >
                    {address.showInfo && (
                        <InfoWindow onCloseClick={() => props.onMarkerClose(address)}>
                            <div>{address.infoContent}</div>
                        </InfoWindow>
                    )}
                </Marker>
            );
        })}
    </GoogleMap>
)});

export class MapComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            markers: []
        }
        this.handleMarkerOpen = this.handleMarkerOpen.bind(this);
        this.handleMarkerClose = this.handleMarkerClose.bind(this);
        this.handleMapLoad = this.handleMapLoad.bind(this);
    }


    handleMapLoad (map) {
        this._mapComponent = map;
    }

    handleMarkerOpen (targetMarker) {
        this.setState({
            markers: this.state.markers.map(marker => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: true,
                    };
                } else {
                    // this makes sure that any opened markers with be closed
                    return {
                        ...marker,
                        showInfo: false,
                    };
                }
            })
        });
    }

    handleMarkerClose (targetMarker) {
        this.setState({
            markers: this.state.markers.map(marker => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: false,
                    };
                }
                return marker;
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list) {
            let newList = nextProps.list.map((address) => {

                return {
                    ...address,
                    showInfo: false,
                    infoContent: (<div><h1>{address.name}</h1><p>{address.address1} {address.city}</p></div>)
                };
            });
            this.setState({ markers: newList });
        }
    }

    render () {
        let { list } = this.props;
        let newList = list.map((address) => {

            return {
                ...address,
                showInfo: false,
                infoContent: `<h1>${address.name}</h1><p>${address.address1} ${address.city}</p>`
            };
        });
        return (
            <div className="mapMain">
                <LocationSearchGoogleMap
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    onMapLoad={this.handleMapLoad}
                    onMarkerClick={this.handleMarkerOpen}
                    onMarkerClose={this.handleMarkerClose}
                    addressesList={this.state.markers}
                >
                    
                </LocationSearchGoogleMap>
            </div>
        );
    }
};
