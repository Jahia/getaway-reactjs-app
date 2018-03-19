import Landmark from "../../beans/Landmark";

class GooglePlacesMapper {

    /**
     * Retrieves a Getaway landmark from a Google place object.
     * @param {Object} place - A Google place object
     * @return The corresponding Getaway landmark
     */
    retrieveLandmark(place) {
        if(place) {
            const name = place.name;
            const photoUrls = this.retrievePhotoUrls(place);
            const locationName = this.retrieveLocationName(place);
            const rating = place.rating;
            return new Landmark(name, locationName, photoUrls, rating);
        }
    }

    /**
     * Retrieves the photo URLs from a Google place object.
     * @param {Object} place - A Google place object
     * @return The photo URLs
     */
    retrievePhotoUrls(place) {
        if(place.photos && place.photos.length > 0) {
            const photos = place.photos;
            if(photos) {
                return photos.map(photo =>  photo.getUrl({'maxWidth': 400, 'maxHeight': 400}));
            }
        }

        return null;
    }

    /**
     * Retrieves the Getaway location's name from a Google place object.
     * @param {Object} place - A Google place object
     * @return the Getaway location's name
     */
    retrieveLocationName(place) {
        const addressDetails = place.address_components;
        if(addressDetails) {
            for(let i = 0; i < addressDetails.length; i++) {
                let addressDetail = addressDetails[i];
                if(addressDetail && addressDetail.types) {
                    let types = addressDetail.types;
                    if(types.includes("locality") && types.includes("political")) {
                        return addressDetail.short_name;
                    }
                }
            }
        }

        return null;
    }
}

export default GooglePlacesMapper