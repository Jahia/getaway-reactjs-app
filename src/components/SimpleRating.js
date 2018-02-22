import React, { Component } from 'react'
import '../styles/SimpleRating.css';

class SimpleRating extends Component {
    render() {
        let value = this.props.value;
        if(value) {
            return (
                <div className="landmark-rating">
                    <span className="rt-val">{value}</span>
                    <span className="rt-bg">
                    <span data-rating={value}></span>
                </span>
                </div>
            )
        } else {
            console.log("The rating object isn't correctly set");
        }
    }
}

export default SimpleRating