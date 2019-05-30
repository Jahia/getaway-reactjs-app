class DXMapper {

    retrieveHeaderPhotoUrl(destination) {
        const headerPhoto = destination.headerPhoto;
        if (headerPhoto) {
            return '/digitall_images' + headerPhoto.path.substring(headerPhoto.path.indexOf('/images')+'/images'.length);
        } else {
            return this.retrieveFirstPhoto(destination);
        }
    }

    retrieveFirstPhoto(destination) {
        if (destination.photos && destination.photos.length > 0) {
            const firstPhotoUrl = destination.photos[0].path;
            return firstPhotoUrl ? '/digitall_images' + firstPhotoUrl.substring(firstPhotoUrl.indexOf('/images')+'/images'.length) : null;
        }

        return null;
    }
}

export default DXMapper;