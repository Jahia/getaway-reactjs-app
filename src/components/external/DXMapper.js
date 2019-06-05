class DXMapper {

    retrieveHeaderPhoto(destination) {
        const headerPhoto = destination.headerPhoto;
        if (headerPhoto && headerPhoto.cloudinary) {
            return headerPhoto.cloudinary;
        } else {
            return this.retrieveFirstPhoto(destination);
        }
    }

    retrieveFirstPhoto(destination) {
        if (destination.photos && destination.photos.length > 0) {
            const firstPhoto = destination.photos[0].cloudinary;
            return firstPhoto ? firstPhoto : null;
        }
        return null;
    }
}

export default DXMapper;