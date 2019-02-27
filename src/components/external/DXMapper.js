import GetawayConfigs from "../../utils/GetawayConfigs";

class DXMapper {

    retrieveHeaderPhotoUrl(destination) {
        const headerPhoto = destination.headerPhoto;
        if(headerPhoto) {
            return GetawayConfigs.dxHost + headerPhoto.url;
        } else {
            return this.retrieveFirstPhoto(destination);
        }
    }

    retrieveFirstPhoto(destination) {
        if(destination.photos && destination.photos.length > 0) {
            const firstPhotoUrl = destination.photos[0].url;
            return firstPhotoUrl ? GetawayConfigs.dxHost + firstPhotoUrl : null;
        }

        return null;
    }
}

export default DXMapper;