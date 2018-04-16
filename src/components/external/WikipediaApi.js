import GetawayConstants from "../../utils/GetawayConstants";

class WikipediaApi {

    constructor() {
        this.format = "json";
        this.action = "query";
        this.prop = "extracts";
        this.onlyBeforeFirstSection = true;
        this.extractPlainText = true;
    }

    getPageExtract(title) {
        const request = this.buildPageRQ(title);

        return new Promise ((resolve, reject) => {
            fetch(request)
                .then(response => {
                        if(response.ok) {
                            resolve(response.json());
                        }

                        reject(response.statusText);
                    });
        });
    }

    buildPageRQ(title) {
        let request = null;
        if(title) {
            request =  GetawayConstants.WIKIPEDIA_API_URL+ "?"
                + "format=" + this.format + GetawayConstants.URL_PARAM_SEP
                + "action=" + this.action + GetawayConstants.URL_PARAM_SEP
                + "prop=" + this.prop;

            if(this.onlyBeforeFirstSection) {
                request += GetawayConstants.URL_PARAM_SEP + "exintro=";
            }

            if(this.extractPlainText) {
                request += GetawayConstants.URL_PARAM_SEP + "explaintext=";
            }

            // to allow CORS, Wikipedia needs this param to be given. It can constrained to our domain
            request += GetawayConstants.URL_PARAM_SEP + "origin=" + GetawayConstants.WIKIPEDIA_CONSTRAINED_DOMAIN;

            request += GetawayConstants.URL_PARAM_SEP + "titles=" + title;
        }

        return request;
    }

}

export default WikipediaApi;