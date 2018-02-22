import React, { Component } from 'react'

class HighlightedList extends Component {

    retrieveElements() {
        console.log("This method should be implemented");
    }

    /**
     * Renders an element
     * @param {Object} element - The element to render
     * @param {Number} i - The index of the element in the list
     */
    renderElement(element, i) {
        console.log("This method should be implemented");
    }

    /**
     * Tells whether or not the element should be rendered
     * @param {boolean} onlyHighlighted - true of only the highlighted elements should be rendered
     * @param {Object} element - The element to check
     */
    shouldRenderElement(onlyHighlighted, element) {
        let shouldRenderElem = false;
        if(onlyHighlighted && onlyHighlighted === true) {
            if(element.isHighlighted) {
                shouldRenderElem = true;
            }
        } else {
            shouldRenderElem = true;
        }

        return shouldRenderElem;
    }

    render() {
        let elements = this.retrieveElements();

        if(elements) {
            // if the list of elements to rendered is limited
            let maxElems = this.props.max && this.props.max < elements.length ?
                this.props.max : elements.length;

            let onlyHighlighted = this.props.onlyHighlighted;
            let renderedElems = [];
            for(let i = 0; i < maxElems; i++) {
                let element = elements[i];
                let shouldRenderElem = this.shouldRenderElement(onlyHighlighted, element);
                if(shouldRenderElem) {
                    let renderedElem = this.renderElement(element, i);
                    renderedElems.push(renderedElem);
                }
            }

            return (renderedElems);
        }
    }
}

export default HighlightedList
