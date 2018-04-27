import React, {Component} from "react";
import {MapWrapper} from "./style";


class LandmarkMap extends Component {

    buildStyledMap() {
        const googleMaps = window.google.maps;
        // Create a new StyledMapType object, passing it an array of styles, and the name to be displayed on the map type control.
        return new googleMaps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ],
            {name: 'Terrain'});
    }

    buildGoogleLocation(geoCoords) {
        if(geoCoords && geoCoords.lat && geoCoords.long) {
            return {lat: geoCoords.lat, lng: geoCoords.long}
        }

        return null;
    }

    addMarkersOnMap(map) {
        const landmarks = this.props.landmarks;
        if(map && landmarks) {
            const googleMaps = window.google.maps;

            const locations = landmarks.map(landmark => {
                if(landmark)
                return this.buildGoogleLocation(landmark.geoCoords)
            });
            console.log("google landmark locations: " + JSON.stringify(locations))
            // Markers (landmarks)
            locations.map(function (location) {
                if(location) {
                    return new googleMaps.Marker({
                        position: location,
                        map: map,
                        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/346954/place_marker.png'
                    });
                }
            });
        }
    }

    initMap() {
        const centerGeoCoords = this.props.centerGeoCoords;
        if(centerGeoCoords){

            // Latitude and Longitude coordinates of destination
            const destination = this.buildGoogleLocation(centerGeoCoords);
            console.log("google desti locations: " + JSON.stringify(destination))

            const googleMaps = window.google.maps;
            const styledMapType = this.buildStyledMap();

            // Map config
            const map = new googleMaps.Map(document.getElementById('mapDest'), {
                zoom: 11,
                center: destination,
                mapTypeControlOptions: {
                    mapTypeIds: ['satellite', 'styled_map']
                }
            });

            this.addMarkersOnMap(map);

            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
        }
    }

   componentDidMount() {
       this.initMap();
   }

    render() {
        return (
            <section>
                <MapWrapper id="mapDest"></MapWrapper>
            </section>
        )
    }
}

export default (LandmarkMap)