import React, { Component } from 'react';
import styled from "styled-components";


class SimpleRating extends Component {

    renderRatingValue(value) {
        if(value) {
            // should the value be displayed at the top
            const displayPrimaryValue = this.props.primaryValue;
            if(displayPrimaryValue) {
                return (<PrimaryRtValueWrapper>{value}</PrimaryRtValueWrapper>);
            } else {
                return (<RtValueWrapper>{value}</RtValueWrapper>);
            }
        }

        return null;
    }

    render() {
        const value = this.props.value;
        if(value) {
            return (
                <div className = "landmark-rating">
                    {this.renderRatingValue(value)}
                    <RtBackgroundWrapper>
                        <span data-rating = {value}></span>
                    </RtBackgroundWrapper>
                </div>
            )
        } else {
            return "Not rated yet";
        }
    }
}

export default SimpleRating


const RtValueWrapper = styled.span`
    color: #ffbc00;
    font-size: 14px;
    font-weight: 700;
    margin-right: 4px;
`;

const PrimaryRtValueWrapper = styled.span`
    color: rgba(0, 0, 0, 0.87);
    font-size: 50px;
    font-weight: 400;
    margin-bottom: -16px;
    display: block;
    margin-right: 0;
`;

const RtBackgroundWrapper = styled.span`
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAQAAAAYCMGrAAAA+klEQVR4AcWV4cbtMBBFF0MIVUopoVSrhDDv/3gf/RFRpzdNOty1HiBO99mzeYWgCMZMKCPGrCgrxiSUhCkDeukxJKCXAUMiehkxw6FZhxEzmp0x4kCzByYISqlYdal0supS6WrVpdLEK0YSamJiJOPY0c/uOG4s6CcXfuKJaJcRzyNCQJsNiF1sRTR1hP11NNJ8RCrONOPRf+r7J+TZgQ5CNfMOYvW/2YxDqzqA/57+gVY9eiakrnyZEGXDsaE3p/4JScwPX3rtnZATDxnPWT7X16XAHaH8HWNrlxJD9TyGti5tCM84zpZe+RxNjeX9tZqLaGoMxN/P/wHP5Vw+8ZxnEQAAAABJRU5ErkJggg==);
    background-repeat: repeat-x;
    display: inline-block;
    overflow: hidden;
    position: relative;
    background-size: 14px 13px;
    height: 13px;
    top: 1px;
    width: 69px;
    span {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAMAAACF3/kSAAAASFBMVEUAAAD/////vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vAD/vADSRdjWAAAAF3RSTlMAABAgMEBQYG9wf4+Qn6Cvv8DP3+Dv8AL4XbcAAAD2SURBVHgBjdPrjq0gDIZhLXhA2XgQ/e7/TncWq5NxoA28v58YSqUrI1BX1Pe9QCeMrTQgtNIHTyMdANg26gH4NhoBxCZq8Mm0UJeoa6FHokcDJXyjOp2YTnUamIY6fZg+Ah1v1LvH9FWzV+Vufg6wVOTyOqu9oHfZP2PRqsqV8htQprtH4bJol+Yh+V7nQs7qCmwmrb6tIaODTn1GvU5jRqNKDfKMRl1BnUaPgh4KJZSRTCdwm9nATTINvPX5tbggUn4qp/0u7uRnI1Be1dpx9A+fxoLyqu60yvdv6SUagY26d+YEokBtmidrAWxJXZonb7jcL/0PRX0uSqPrf20AAAAASUVORK5CYII=);
        background-repeat: repeat-x;
        display: block;
        background-size: 14px 13px;
        height: 13px;
        top: 1px;
        width: 0;
        &[data-rating='0.3'],
        &[data-rating='0.4'],
        &[data-rating='0.5'],
        &[data-rating='0.6'] {
            width: 7px;
        }
        
        &[data-rating='0.7'],
        &[data-rating='0.8'],
        &[data-rating='0.9'],
        &[data-rating='1'],
        &[data-rating='1.1'],
        &[data-rating='1.2'] {
            width: 13px;
        }
        
        &[data-rating='1.3'],
        &[data-rating='1.4'],
        &[data-rating='1.5'],
        &[data-rating='1.6'] {
            width: 21px;
        }
        
        &[data-rating='1.7'],
        &[data-rating='1.8'],
        &[data-rating='1.9'],
        &[data-rating='2'],
        &[data-rating='2.1'],
        &[data-rating='2.2'] {
            width: 27px;
        }
        
        &[data-rating='2.3'],
        &[data-rating='2.4'],
        &[data-rating='2.5'],
        &[data-rating='2.6'] {
            width: 35px;
        }
        
        &[data-rating='2.7'],
        &[data-rating='2.8'],
        &[data-rating='2.9'],
        &[data-rating='3'],
        &[data-rating='3.1'],
        &[data-rating='3.2'] {
            width: 41px;
        }
        
        &[data-rating='3.3'],
        &[data-rating='3.4'],
        &[data-rating='3.5'],
        &[data-rating='3.6'] {
            width: 48px;
        }
        
        &[data-rating='3.7'],
        &[data-rating='3.8'],
        &[data-rating='3.9'],
        &[data-rating='4'],
        &[data-rating='4.1'],
        &[data-rating='4.2'] {
            width: 56px;
        }
        
        &[data-rating='4.3'],
        &[data-rating='4.4'],
        &[data-rating='4.5'],
        &[data-rating='4.6'] {
            width: 63px;
        }
        
        &[data-rating='4.7'],
        &[data-rating='4.8'],
        &[data-rating='4.9'],
        &[data-rating='5'] {
            width: 69px;
        }
    }
`;