import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import GetawayConstants from '../../../utils/GetawayConstants'
import DXMapper from "../../external/DXMapper";

/* import '../styles/DestinationCard.css';  TODO review this */

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
                <div className="destination-card">
                    <img className="destination-photo" src={headerPhoto}/>
                    <div className="destination-name">{name}</div>
                    <div className="destination-country">{country}</div>
                </div>
            </Link>
        )
    }
}

export default DestinationCard