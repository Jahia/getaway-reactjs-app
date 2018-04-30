import React, { Component } from 'react'
import {
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