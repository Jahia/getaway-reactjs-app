import React, {Component} from 'react'
import styled from "styled-components";
import Readmore from "./Readmore";

const MainOutlineWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
`;

const OutlineWrapper = styled.section`
    padding: 16px;
    margin: 20px auto;
    max-width: 760px; 
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 31px;
    p {
        margin-bottom: 20px;
    }
`;

class DestinationOutline extends Component {

    createOutlineInnerHTML() {
        return {__html: this.props.outline.value};
    }

    render() {
        if (!this.props.outline) return null;
        const outlineValue = this.createOutlineInnerHTML();
        return (
            <MainOutlineWrapper>
                <OutlineWrapper>
                    <Readmore outlineValue={outlineValue} />
                </OutlineWrapper>
            </MainOutlineWrapper>
        )
    }
}

export default DestinationOutline