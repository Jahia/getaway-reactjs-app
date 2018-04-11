import React, { Component } from 'react'

class HorizontalList extends Component {

    render() {
        const elements = this.props.elements;
        const renderElement = this.props.renderElement;
        //  should normally be checked in the extending class but it is safer to keep it here too.
        if(elements && renderElement) {
            // if the list of elements to rendered is limited
            let maxElems = this.props.max && this.props.max < elements.length ?
                this.props.max : elements.length;

            let renderedElems = [];
            for(let i = 0; i < maxElems; i++) {
                let element = elements[i];
                let renderedElem = renderElement(element, i);
                renderedElems.push(renderedElem);
            }

            return (renderedElems);
        }
    }
}

export default HorizontalList
