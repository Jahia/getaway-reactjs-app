import React, { Component } from 'react'

class HorizontalList extends Component {

    /**
     * Renders an element
     * @param {Object} element - The element to render
     * @param {Number} i - The index of the element in the list
     */
    renderElement(element, i) {
        console.log("This method should be implemented");
    }

    render() {
        const elements = this.props.elements;
        //  should normally be checked in the extending class but it is safer to keep it here too.
        if(elements) {
            // if the list of elements to rendered is limited
            let maxElems = this.props.max && this.props.max < elements.length ?
                this.props.max : elements.length;

            let renderedElems = [];
            for(let i = 0; i < maxElems; i++) {
                let element = elements[i];
                let renderedElem = this.renderElement(element, i);
                renderedElems.push(renderedElem);
            }

            return (renderedElems);
        }
    }
}

export default HorizontalList
