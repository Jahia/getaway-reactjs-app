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
            if(expanded) {
                return (
                    <ReadmoreWrapper onClick={this.readMore.bind(this)}>
                        <OutlineExpandedTextWrapper dangerouslySetInnerHTML={outlineValue} />
                        <ExpandedTriggerWrapper>Read more</ExpandedTriggerWrapper>
                    </ReadmoreWrapper>
                );
            } else {
                return (
                    <ReadmoreWrapper onClick={this.readMore.bind(this)}>
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