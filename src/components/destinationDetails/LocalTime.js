import {Component} from "react";
import GetawayConstants from "../../utils/GetawayConstants";

class LocalTime extends Component {

    static formatDate(date) {
        // Days of the week
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const day = days[date.getDay()];
        let hr = date.getHours();
        let min = date.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        let ampm = "AM";
        if (hr > 12) {
            hr -= 12;
            ampm = "PM";
        }

        // Formated string
        return day + ' ' + hr + ':' + min + ' ' + ampm;
    }

    componentDidMount() {
        if (!this.props.latitude || !this.props.longitude) {
            this.setState({localDate: "N/A"});
            return;
        }


        // lat & lng of destination
        const loc = this.props.latitude.value + ',' + this.props.longitude.value;

        // Current date/time of user computer
        const targetDate = new Date();

        // Current UTC date/time in seconds
        const timestamp = targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60;

        const apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp
            + '&key=' + GetawayConstants.googleMapsApiKey;

        // Create new XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        xhr.callback = this.setState.bind(this);

        // Open GET request
        xhr.open('GET', apicall);

        xhr.onload = function () {
            if (xhr.status === 200) {

                // Convert returned string to JSON object
                const output = JSON.parse(xhr.responseText);

                // If everything was returned successfully
                if (output.status === 'OK') {

                    // DST and time zone offsets in milliseconds
                    const offsets = output.dstOffset * 1000 + output.rawOffset * 1000;

                    // Date object containing current time of destination (timestamp + dstOffset + rawOffset)
                    const localdate = new Date(timestamp * 1000 + offsets);

                    // Display current date and time of destination on html
                    const formatedDate = LocalTime.formatDate(localdate);
                    this.callback({localDate: formatedDate});
                    console.log("Local time changed: ", formatedDate)
                }
            }
            else {
                console.log('Request failed.  Status ' + xhr.status);
                this.callback({localDate: "N/A"});
            }
        };

        // Send request
        xhr.send();
    }

    render() {
        const localDate = this.state ? this.state.localDate : null;
        return (
                localDate ? this.state.localDate : "calculating ..."
        )
    }
}

export default LocalTime