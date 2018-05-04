import React, {Component} from 'react'
import DestinationDetails from "./DestinationDetails";
import {DestiLandmarksContainer} from "./landmarks"
import DXMapper from "../external/DXMapper";
import {Banner} from "../shared/generic";
import {withRouter} from 'react-router-dom'
import styled from "styled-components";
import {MainPanel} from "../style"
import {Header, Footer } from "./../shared/generic/index";


import { TransitionGroup, CSSTransition} from 'react-transition-group'

class DestinationPanelView extends Component {

    render() {
        const   destination =   this.props.destination;

        if(destination) {
            const destiSystemName   =   destination.systemName;
            const destiName         =   destination.name;
            const destiLatitude     =   destination.latitude ? parseFloat(destination.latitude.value) : null;
            const destiLongitude    =   destination.latitude ? parseFloat(destination.longitude.value) : null;
            const destiGeoCoords    =   {
                lat: destiLatitude,
                long:destiLongitude
            }
            const landmarkPlaceIds  =   destination.landmarkPlaceIds ? destination.landmarkPlaceIds.values : null;
            const dxMapper          =   new DXMapper();
            const headerPhotoUrl    =   dxMapper.retrieveHeaderPhotoUrl(destination);
            const currentKey        =   destination.systemName;
            const timeout           =   {enter: 450, exit: 400};


            if (destiName && destiSystemName) {
                return(
                    <span>
                        <Banner destinationName={destiName}
                                destinationCountry={destination.country}
                                headerPhoto={headerPhotoUrl}/>

                        <DestinationDetails area={destination.area}
                                            elevation={destination.elevation}
                                            populationCount={destination.populationCount}
                                            populationDate={destination.populationDate}
                                            headline={destination.headline}
                                            outline={destination.outline}
                                            latitude={destination.latitude}
                                            longitude={destination.longitude}/>
                        <DestiLandmarksContainer max="5" placeIds={landmarkPlaceIds} destiGeoCoords={destiGeoCoords}/>
                        <Footer/>
                    </span>
                )
            }
        }
        return null;
    }
}

export default withRouter(DestinationPanelView)



const DestinationCardWrapper = styled.div`
    display: inline-block;
    width: calc(33% - 32px);
    box-sizing: border-box;
    border-radius: 4px;
    margin: 16px 16px 30px 16px;
    text-align: center;
    position: relative;
    padding-top: 15px;
    padding-bottom: 8px;
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -ms-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    @media screen and (max-width: 840px) {
        width: calc(50% - 34px);
    }
    @media screen and (max-width: 520px) {
        width: calc(100% - 34px);  
    }
    &:last-child {
        @media screen and (max-width: 840px) {
            width: calc(100% - 34px);
        }  
    }
    &:hover {
        background: #eee;
        cursor: pointer;
    }
    &:not(:last-child):after {
        content: "";
        background: #220B38;
        opacity: .42;
        border-radius: 10px;
        position: absolute;
        right: -20px;
        height: 30px;
        width: 4px;
        top: 96px;
        @media screen and (max-width: 840px) {
            display: none;
        }
    }
    &:first-child:after {
        @media screen and (max-width: 840px) {
            display: block;
            content: "";
            background: #220B38;
            opacity: .42;
            border-radius: 10px;
            position: absolute;
            right: -20px;
            height: 30px;
            width: 4px;
            top: 96px;
        }
        @media screen and (max-width: 520px) {
            display: none;
        }
    }
`;

const DestinationPhoto = styled.img`
    object-fit: cover;
    height: 200px;
    width: 200px;
`;


const DestinationNameWrapper = styled.div`
    color: #220B38;
    font-size: 20px;
    font-weight: 600;
`;


const DestinationCountryWrapper = styled.div`
    text-transform: uppercase;
    color: #777;
    font-size: 14px;
    font-weight: 600;
`;