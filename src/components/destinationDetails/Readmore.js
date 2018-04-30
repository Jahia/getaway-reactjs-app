import React, { Component } from 'react'
import {
    ExpandedTriggerWrapper,
    OutlineExpandedTextWrapper,
    OutlineTextWrapper,
    ReadmoreWrapper,
    TriggerWrapper
} from "./style";

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
            const onClickFunc = this.readMore.bind(this);
            if(expanded) {
                return (
                    <ReadmoreWrapper onClick={onClickFunc}>
                        <OutlineExpandedTextWrapper dangerouslySetInnerHTML={outlineValue} />
                        <ExpandedTriggerWrapper>Read more</ExpandedTriggerWrapper>
                    </ReadmoreWrapper>
                );
            } else {
                return (
                    <ReadmoreWrapper onClick={onClickFunc}>
                        <OutlineTextWrapper dangerouslySetInnerHTML={outlineValue}/>
                        <TriggerWrapper>Read more</TriggerWrapper>
                    </ReadmoreWrapper>
                );
            }
        }

        return null;
    }
}

export default Readmore