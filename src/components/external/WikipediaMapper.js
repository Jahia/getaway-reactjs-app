
class WikipediaMapper {

    retrieveExtract(response) {
        if(response && response.query) {
            const pages = response.query.pages;
            const firstPage = this.retrieveFirstPage(pages);

            return firstPage.extract;
        }

        return null;
    }

    retrieveFirstPage(pages) {
        if(pages) {
            const keys = Object.keys(pages)
            if(keys && keys.length > 0) {
                const firstPageId = keys[0];
                return pages[firstPageId];
            }
        }

        return null;
    }
}

export default WikipediaMapper