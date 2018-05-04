import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import topSectionImg from "../../../images/rio-de-janeiro.jpg"


class Banner extends Component {

    buildInlineStyle() {
        const headerPhoto = this.props.headerPhoto;
        if(headerPhoto) {
            return { backgroundImage: "url(" + headerPhoto+ ")" };
        }

        return null;
    }

    render() {
        const   timeout         =   {enter: 450, exit: 400};
        const destiName = this.props.destinationName;
        const destiCountry = this.props.destinationCountry;
        const inlineStyle = this.buildInlineStyle();

        if (destiName && destiCountry) {
            return (
                <BannerTopSectionDestWrapper style={inlineStyle}>
                    <BannerShadowOverlayWrapper/>
                    <h1>{destiName}</h1>
                    <h3>{destiCountry}</h3>
                </BannerTopSectionDestWrapper>
            );
        } else {
            return (
                <BannerTopSectionWrapper style={inlineStyle}>
                    <BannerShadowOverlayWrapper/>
                        <h1>Find your next vacation idea among these places handpicked just for you!</h1>
                        <BannerCtaWrapper>
                            <Link to = {`/random/destination`}>Take me somewhere!</Link>
                        </BannerCtaWrapper>

                </BannerTopSectionWrapper>
            );
        }
    }
}

export default Banner


const BannerTopSectionWrapper = styled.section`
    background: url(${topSectionImg});
    width: 100%;
    height: 340px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-bottom: 30px;
    @media screen and (max-width: 840px) {
        height: 300px;
    }
    @media screen and (max-width: 520px) {
        height: 270px;
    }
    h1 {
        color: #fff;
        text-align: center;
        top: 175px;
        position: absolute;
        width: 100%;
        font-weight: 500;
        font-size: 24px;
        @media screen and (max-width: 840px) {
            top: 150px;
            font-size: 20px;
        }
        @media screen and (max-width: 700px) {
            font-size: 18px;
            padding: 0 8px;
            box-sizing: border-box;
        }
        @media screen and (max-width: 520px) {
            top: 120px;
            padding: 0 16px;
        }
    }
`;

const BannerShadowOverlayWrapper = styled.div`
    background: linear-gradient(113deg, rgba(249, 123, 92, 0.64) 6%,rgba(176, 77, 230, 0.64) 97%);
    height: 340px;
    width: 100%;
    position: absolute;
    
    @media screen and (max-width: 840px) {
        height: 300px;
        top: 58px;
    }
    @media screen and (max-width: 840px) {
        height: 300px;
        top: 58px;
    }
    @media screen and (max-width: 520px) {
        height: 270px;
    }
`;

const BannerCtaWrapper = styled.div`
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 220px;
    text-align: center;
    position: absolute;
    top: 255px;
    @media screen and (max-width: 840px) {
        top: 220px;
    }
    a {
        color: #fff;
        border: 2px solid #fff;
        padding: 5px 16px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 500;
        @media screen and (max-width: 520px) {
            background: white;
            color: #220b38;
            font-size: 14px;
        }
    }
`;

const BannerTopSectionDestWrapper = styled.section`
    width: 100%;
    height: 340px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -80px;
    margin-bottom: 8px;
    @media screen and (max-width: 840px) {
        height: 300px;
        background-position: initial;
    }
    @media screen and (max-width: 520px) {
        height: 200px;
    }
    h1 {
        color: rgba(255, 255, 255, 0.22);
        text-align: center;
        top: 82px;
        position: absolute;
        width: 100%;
        font-weight: 500;
        font-size: 150px;
        @media screen and (max-width: 840px) {
            top: 120px;
            font-size: 90px;
        }
        @media screen and (max-width: 700px) {
            padding: 0 8px;
            box-sizing: border-box;
        }
        @media screen and (max-width: 520px) {
            top: 70px;
            padding: 0 16px;
        }
    }
    h3 {
        color: #ffffff;
        opacity: .64;
        text-align: center;
        font-weight: 500;
        font-size: 22px;
        top: 270px;
        position: absolute;
        width: 100%;
        letter-spacing: .8px;
        @media screen and (max-width: 840px) {
            top: 240px;
        }
        @media screen and (max-width: 520px) {
            top: 180px;
        }
    }
`;

const BannerDestShadowOverlayWrapper = styled.div`
    background: linear-gradient(113deg, rgba(249, 123, 92, 0.64) 6%,rgba(176, 77, 230, 0.64) 97%);
    height: 340px;
    width: 100%;
    position: absolute;
    opacity: 1;
    @media screen and (max-width: 840px) {
        height: 300px;
        top: 58px;
    }
    @media screen and (max-width: 520px) {
        height: 200px;
    }
`;


