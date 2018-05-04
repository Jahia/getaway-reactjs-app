import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import SimpleRating from "./SimpleRating";
import styled from "styled-components";


class LandmarkCard extends Component {
    render() {
        let     element         =   null;
        const isHighlighted = this.props.isHighlighted;
        const landmark = this.props.landmark;
        const photoUrls = landmark.photoUrls;
        const name = landmark.name;
        const locationName = landmark.locationName;
        const rating = landmark.rating;

        const goToDestination = () => {
            const { top, right, bottom, left, width, height } = element.getBoundingClientRect();
            this.props.history.push({
                pathname: `/landmark/${landmark.externalId}`,
                state: {
                    to: 'modal',
                    meta: {
                        from: { top, right, bottom, left, width, height },
                    },
                }

            });
        };

        if(landmark && name && locationName && photoUrls && photoUrls.length > 0) {
            return (
            <span ref={(el) => { element = el; }} onClick={goToDestination}>
                <LandmarkCardWrapper isHighlighted={isHighlighted}>
                    <LandmarkPhoto src = {photoUrls[0]} isHighlighted={isHighlighted}/>
                    <LandmarkNameWrapper>{name}</LandmarkNameWrapper>
                    {isHighlighted && <LandmarkLocationWrapper>{locationName}</LandmarkLocationWrapper>}
                    <SimpleRating value = {rating} />
                </LandmarkCardWrapper>
            </span>
            )
        } else {
            console.log("The landmark object isn't correctly set");
        }
    }
}

export default withRouter(LandmarkCard)


const LandmarkCardWrapper = styled.div`
    display: inline-block;
    width: ${props => props.isHighlighted ? 'calc(25% - 35px)' : 'calc(20% - 35px)'};
    box-sizing: border-box;
    border-radius: 4px;
    margin: 15px 16px 30px 16px;
    margin-bottom: 50px;
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
        margin-bottom: ${props => props.isHighlighted ? '40px' : '30px'};
        
        &:last-child {
            width: ${props => !props.isHighlighted ? 'calc(100% - 34px)' : null} ;
            margin-bottom: 40px;
        }
    }
    
    @media screen and (max-width: 440px) {
        width: calc(100% - 34px);
        margin-bottom: 30px;
    }
    
    &:hover {
        background: #eee;
        cursor: pointer;
    }
`;

const LandmarkPhoto = styled.img`
    object-fit: cover;
    height: ${props => props.isHighlighted ? '152px' : '120px'};
    width: ${props => props.isHighlighted ? '152px' : '120px'};
    border-radius: 50%;
`;

const LandmarkNameWrapper = styled.div`
    color: #220B38;
    font-size: 18px;
    font-weight: 600;
`;

const LandmarkLocationWrapper = styled.div`
    text-transform: uppercase;
    color: #777;
    font-size: 14px;
    font-weight: 600;
`;