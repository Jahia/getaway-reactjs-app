import React, { Component } from 'react'
/* import '../styles/SimpleRating.css'; TODO review this */

class SimpleRating extends Component {
    render() {
        const value = this.props.value;
        if(value) {
            return (
                <div className = "landmark-rating">
                    <span className = "rt-val">{value}</span>
                    <span className = "rt-bg">
                    <span data-rating = {value}></span>
                </span>
                </div>
            )
        } else {
            return "Not rated yet";
        }
    }
}

export default SimpleRating