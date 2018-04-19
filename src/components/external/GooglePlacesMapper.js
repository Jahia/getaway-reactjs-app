import Landmark from "../../beans/Landmark";

class GooglePlacesMapper {

    /**
     * Retrieves the main fields for a Getaway landmark from a Google place object.
     * @param {Object} place - A Google place object
     * @return The corresponding Getaway landmark
     */
    retrieveLandmark(placeId, place) {
        if(placeId && place) {
            const name = place.name;
            const photoUrls = this.retrievePhotoUrls(place);
            const locationName = this.retrieveLocationName(place);
            const rating = place.rating;
            const geoCoords = this.retrieveDestiGeoCoordinates(place);
            return new Landmark(placeId, name, locationName, geoCoords, photoUrls, rating);
        }

        return null;
    }

    /**
     * Retrieves the full detailed Getaway landmark from a Google place object.
     * @param {Object} place - A Google place object
     * @return The corresponding Getaway landmark
     */
    retrieveFullLandmark(placeId, place) {
        let landmark = this.retrieveLandmark(placeId, place);
        if(landmark) {
            landmark.reviews = this.retrieveReviews(place);
        }

        return landmark;
    }

    retrieveReviews(place) {
        if(place && place.reviews) {
            const googleReviews = place.reviews;
            return googleReviews.map(googleReview => (
                 {
                    authorName: googleReview.author_name,
                    profilePhotoUrl: googleReview.profile_photo_url,
                    rating: googleReview.rating,
                    value: googleReview.text,
                    timeDesc: googleReview.relative_time_description,
                    language: googleReview.language
                }
            ));
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

    retrieveDestiGeoCoordinates(place) {
        const geometry = place.geometry;
        if(geometry && geometry.location) {
            return {lat: geometry.location.lat(), long: geometry.location.lng()};
        }

        return null;
    }
}

export default GooglePlacesMapper