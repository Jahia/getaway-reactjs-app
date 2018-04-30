import React, { Component } from 'react';
import styled from "styled-components";


class Readmore extends Component {

    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    readMore() {
        this.setState({expanded: true})
    }

    render() {
        const expanded = this.state.expanded;
        const outlineValue = this.props.outlineValue;
        if(outlineValue) {
            return (
                <ReadmoreWrapper onClick={this.readMore.bind(this)}>
                    <OutlineTextWrapper expanded={expanded} dangerouslySetInnerHTML={outlineValue} />
                    <TriggerWrapper expanded={expanded}>Read more</TriggerWrapper>
                </ReadmoreWrapper>
            );
        }

        return null;
    }
}

export default Readmore


const ReadmoreWrapper = styled.div`
    position: relative;
    text-decoration: none;
    cursor: text;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TriggerWrapper = styled.span`
    ${props => !props.expanded ? `
    display: block;
    position: absolute;
    bottom: -8px;
    cursor: pointer;
    color: #983efc;
    text-align: center;
    border: 2px solid #983efc;
    padding: 2px 16px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
    ` : `opacity: 0;
    visibility: hidden;
    `}
`;

const OutlineTextWrapper = styled.article`
    ${props => !props.expanded ? `
    position: relative;
    overflow: hidden;
    max-height: 240px;
    margin-bottom: 30px;
    transition: max-height 500ms ease;
    &::before {
        content: '';
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 50%, white 100%);
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 78.4px;
        transition: opacity 500ms ease, visibility 500ms ease;
    }` : `
    max-height: 6000px;
    &::before {
        opacity: 0;
        visibility: hidden;
    }
    `}
`;
