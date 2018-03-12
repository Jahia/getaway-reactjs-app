import Landmark from "../beans/Landmark";

class GooglePlacesMapper {

    retrieveLandmark(place) {
        if(place) {
            const name = place.name;
            const photoUrls = this.retrievePhotoUrls(place);
            const destination = this.retrieveDestination(place);
            const rating = place.rating;
            return new Landmark(name, destination, photoUrls, rating);
        }
    }

    retrievePhotoUrls(place) {
        if(place.photos && place.photos.length > 0) {
            const photos = place.photos;
            if(photos) {
                return photos.map(photo =>  photo.getUrl({'maxWidth': 400, 'maxHeight': 400}));
            }
        }

        return null;
    }

    retrieveDestination(place) {
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