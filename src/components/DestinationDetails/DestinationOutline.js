import React, {Component} from 'react'

class DestinationOutline extends Component {

    render() {

        if (!this.props.outline) return null;
        return (
            <section className="outlineMain">
                {/*<div class="outline-info">
                By <b>the GetAway team</b><span></span><time datetime="2017-12-08">Travel date <b>8 December 2017</b></time>

            </div>*/}
                <section className="outline-container wrap">
                    <div className="read-more" onclick="this.classList.add('expanded')">
                        <article className="outline-text">
                            {this.props.outline.value}
                        </article>
                        <span className="trigger">Read more</span>
                    </div>
                </section>
            </section>
        )
    }
}

export default DestinationOutline