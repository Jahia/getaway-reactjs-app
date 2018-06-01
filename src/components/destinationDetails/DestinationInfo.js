import React, {Component} from 'react';
import LocalTime from "./LocalTime";
import styled from "styled-components";

class DestinationInfo extends Component {

    render() {
        const area = this.props.area ? this.props.area.value + " km²" : "N/A";
        const elevation = this.props.elevation ? this.props.elevation.value + " m" : "N/A";
        let population = "N/A";
        if(this.props.populationCount) {
            const populationCount = this.props.populationCount.value;
            population = populationCount > 1000000 ? (populationCount/1000000 + " million") : populationCount;
            if (this.props.populationDate) population += " (" + this.props.populationDate.value + ")"
        }
        const headline = this.props.headline ? "\"" + this.props.headline.value + "\"" : "";

        return (
        /* Destination info */
        <DestinationInfoWrapper>
            <InfoContainerWrapper>
                <InfoElementWrapper>
                    <i className="material-icons">filter_tilt_shift</i><b>Area</b><span>{area}</span>
                </InfoElementWrapper>

                <InfoElementWrapper>
                    <i className="material-icons">terrain</i><b>Elevation</b><span>{elevation}</span>
                </InfoElementWrapper>
                <InfoElementWrapper>
                    <i className="material-icons">access_time</i><b>Local time</b><span id="destLocalTime">
                    <LocalTime latitude={this.props.latitude}
                               longitude={this.props.longitude} /></span>
                </InfoElementWrapper>
                <InfoElementWrapper>
                    <i className="material-icons">people</i><b>Population</b><span>{population}</span>
                </InfoElementWrapper>

            </InfoContainerWrapper>
            <h2>{headline}</h2>
        </DestinationInfoWrapper>
        )
    }
}

export default DestinationInfo


export const DestinationInfoWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-size: 24px;
        opacity: .87;
        font-weight: 400;
        margin: 16px 0;
        margin-top: 30px;
        text-align: center;
        line-height: 38px;
        width: 100%;
        @media screen and (max-width: 840px) {
            margin-top: 40px;
            padding: 0 16px;
            box-sizing: border-box;
        }
    }
`;

export const InfoContainerWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 4px 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoElementWrapper = styled.div`
    margin: 4px 0;
    height: 32px;
    padding-right: 30px;
    position: relative;
    @media screen and (max-width: 840px) {
        padding-right: 0;
        padding: 0 26px;
    }
    @media screen and (max-width: 600px) {
        width: calc(50% - 54px);
        display: inline-block;
    }
    
    i {
        position: absolute;
        top: 4px;
        left: 2px;
        opacity: .52;
        font-size: 22px;
        @media screen and (max-width: 960px) {
            display: none;
        }
    }
    
    b {
        line-height: 32px;
        padding-left: 36px;
        opacity: .67;
        @media screen and (max-width: 960px) {
            padding-left: 16px;
        }
        @media screen and (max-width: 840px) {
            padding-left: 0;
        }
        @media screen and (max-width: 700px) {
            font-size: 14px;
        }
    }
    
    span {
        padding-left: 8px;
        opacity: .52;
        font-weight: 500;
        @media screen and (max-width: 840px) {
            display: block;
            margin-top: -4px;
            padding-left: 0;
        }
        @media screen and (max-width: 700px) {
            margin-top: -6px;
            padding-left: 0;
            font-size: 14px;
        }
    }
`;


