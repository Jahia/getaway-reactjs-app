
class WikipediaMapper {

    retrievePageInfo(response) {
        if(response && response.query) {
            const pages = response.query.pages;
            const firstPage = this.retrieveFirstPage(pages);

            const extract = this.retrieveExtract(firstPage);
            const pageId = this.retrievePageId(firstPage);

            return {
                pageId: pageId,
                extract: extract
            }
        }

        return null;
    }

    retrieveExtract(page) {
        if(page) {
            let extract = page.extract;
            // if the extract is somehow empty
            extract = (extract === "...") ? null : extract;

            return extract;
        }

        return null;
    }

    retrievePageId(page) {
        if(page) {
            return page.pageid;
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