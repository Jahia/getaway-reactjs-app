import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    BannerCtaWrapper,
    BannerDestShadowOverlayWrapper,
    BannerShadowOverlayWrapper,
    BannerTopSectionDestWrapper,
    BannerTopSectionWrapper
} from "./style";


class Banner extends Component {

    buildInlineStyle() {
        const headerPhoto = this.props.headerPhoto;
        if(headerPhoto) {
            return { backgroundImage: "url(" + headerPhoto+ ")" };
        }

        return null;
    }

    render() {
        const destiName = this.props.destinationName;
        const destiCountry = this.props.destinationCountry;
        const inlineStyle = this.buildInlineStyle();

        if (destiName && destiCountry) {
            return (
                <BannerTopSectionDestWrapper style={inlineStyle}>
                    <BannerDestShadowOverlayWrapper/>
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