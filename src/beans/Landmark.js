
class Landmark {
    /**
     * Constructor
     * @param externalId: corresponds to the id given by an external API
     * @param name: the name of the Landmark
     * @param locationName: the location name of the Landmark
     * @param geoCoords: the geocoordinates of the Landmark
     * @param photoUrls: the photo urls
     * @param rating: the Landmark's rating
     */
    constructor(externalId, name, locationName, geoCoords, photoUrls, rating) {
        this.externalId = externalId
        this.name = name;
        this.locationName = locationName;
        this.geoCoords = geoCoords;
        this.photoUrls = photoUrls;
        this.rating = rating;
    }
}

export default Landmark
