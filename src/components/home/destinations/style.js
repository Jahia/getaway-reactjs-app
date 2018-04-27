import styled from "styled-components";

export const MainDestinationWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-size: 18px;
        opacity: .67;
        font-weight: 500;
        margin-top: 16px;
        margin-bottom: 8px;
        border-bottom: 2px dotted #ccc;
        @media screen and (max-width: 1080px) {
            margin: 16px 16px 8px 16px;
        }
    }
`;

export const DestinationCardWrapper = styled.div`
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

export const DestinationPhoto = styled.img`
    object-fit: cover;
    height: 200px;
    width: 200px;
`;


export const DestinationNameWrapper = styled.div`
    color: #220B38;
    font-size: 20px;
    font-weight: 600;
`;


export const DestinationCountryWrapper = styled.div`
    text-transform: uppercase;
    color: #777;
    font-size: 14px;
    font-weight: 600;
`;