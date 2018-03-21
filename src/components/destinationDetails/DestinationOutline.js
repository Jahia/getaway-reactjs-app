import React, {Component} from 'react'

class DestinationOutline extends Component {

    constructor(props) {
        super(props);
        this.state = {expanded: false}
    }

    readMore() {
        this.setState({expanded: true})
    }

    createOutlineInnerHTML() {
        return {__html: this.props.outline.value};
    }

    render() {
        if (!this.props.outline) return null;
        return (
            <section className="outlineMain">
                <section className="outline-container wrap">
                    <div className={'read-more' + (this.state.expanded ? ' expanded' : '')} onClick={this.readMore.bind(this)}>
                        <article className="outline-text" dangerouslySetInnerHTML={this.createOutlineInnerHTML()}>
                        </article>
                        <span className="trigger">Read more</span>
                    </div>
                </section>
            </section>
        )
    }
}

export default DestinationOutline