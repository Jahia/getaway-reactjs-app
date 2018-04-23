import GetawayConstants from "../../utils/GetawayConstants";

class DXMapper {

    retrieveHeaderPhotoUrl(destination) {
        const headerPhoto = destination.headerPhoto;
        if(headerPhoto && headerPhoto.refNode) {
            return GetawayConstants.dxHost + headerPhoto.refNode.url;
        } else {
            return this.retrieveFirstPhoto(destination);
        }
    }

    retrieveFirstPhoto(destination) {
        if(destination.photos && destination.photos.files && destination.photos.files.length > 0) {
            const photoNode = destination.photos.files[0];
            const photo = photoNode ? GetawayConstants.dxHost + "/files/live" + photoNode.path : null;
            return photo;
        }

        return null;
    }
}

export default DXMapper;