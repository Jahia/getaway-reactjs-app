import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DXMapper from "../../external/DXMapper";
import styled from "styled-components";


class DestinationCard extends Component {
    render() {
        const destination = this.props.destination;
        if (!destination) {
            console.log("The destination object isn't correctly set");
            return
        }
        const name = destination.name;
        const systemName = destination.systemName;
        const country = destination.country;

        const dxMapper = new DXMapper();
        const headerPhoto = dxMapper.retrieveHeaderPhotoUrl(destination);
        return (
            <Link to={`/destination/${systemName}`}>
                <DestinationCardWrapper>
                    <DestinationPhoto src={headerPhoto}/>
                    <DestinationNameWrapper>{name}</DestinationNameWrapper>
                    <DestinationCountryWrapper>{country}</DestinationCountryWrapper>
                </DestinationCardWrapper>
            </Link>
        )
    }
}

export default DestinationCard


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