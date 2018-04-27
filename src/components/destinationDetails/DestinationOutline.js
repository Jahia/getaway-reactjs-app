import React, {Component} from 'react'
import Readmore from "./Readmore";
import {MainOutlineWrapper, OutlineWrapper} from "./style";

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