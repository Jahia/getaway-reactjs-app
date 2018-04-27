import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DXMapper from "../../external/DXMapper";
import {DestinationCardWrapper, DestinationCountryWrapper, DestinationNameWrapper, DestinationPhoto} from "./style";


class DestinationCard extends Component {
    render() {
        const destination = this.props.destination;
        if (!destination) {
            console.log("The destination object isn't correctly set");
            return
        }
        const name = destination.name;
        const systemName = destination.systemName;
        const country = destination.country;

        const dxMapper = new DXMapper();
        const headerPhoto = dxMapper.retrieveHeaderPhotoUrl(destination);
        return (
            <Link to={`/destination/${systemName}`}>
                <DestinationCardWrapper>
                    <DestinationPhoto src={headerPhoto}/>
                    <DestinationNameWrapper>{name}</DestinationNameWrapper>
                    <DestinationCountryWrapper>{country}</DestinationCountryWrapper>
                </DestinationCardWrapper>
            </Link>
        )
    }
}

export default DestinationCard