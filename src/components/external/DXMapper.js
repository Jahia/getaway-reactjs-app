import GetawayConfigs from "../../utils/GetawayConfigs";

class DXMapper {

    retrieveHeaderPhotoUrl(destination) {
        const headerPhoto = destination.headerPhoto;
        if(headerPhoto && headerPhoto.refNode) {
            return GetawayConfigs.dxHost + headerPhoto.refNode.url;
        } else {
            return this.retrieveFirstPhoto(destination);
        }
    }

    retrieveFirstPhoto(destination) {
        if(destination.photos && destination.photos.refNodes && destination.photos.refNodes.length > 0
            && destination.photos.refNodes[0]) {
            const firstPhotoUrl = destination.photos.refNodes[0].url;
            return firstPhotoUrl ? GetawayConfigs.dxHost + firstPhotoUrl : null;
        }

        return null;
    }
}

export default DXMapper;