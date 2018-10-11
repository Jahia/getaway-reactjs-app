import GetawayConfigs from "../../utils/GetawayConfigs";

class WikipediaApi {

    /**
     * Constructor. It sets the default params.
     * To allow setting custom params please implement another constructor.
     */
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
            request =  GetawayConfigs.WIKIPEDIA_API_URL() + "?"
                + "format=" + this.format + GetawayConfigs.URL_PARAM_SEP
                + "action=" + this.action + GetawayConfigs.URL_PARAM_SEP
                + "prop=" + this.prop;

            if(this.onlyBeforeFirstSection) {
                request += GetawayConfigs.URL_PARAM_SEP + "exintro=";
            }

            if(this.extractPlainText) {
                request += GetawayConfigs.URL_PARAM_SEP + "explaintext=";
            }

            // to allow CORS, Wikipedia needs this param to be given. It can constrained to our domain
            request += GetawayConfigs.URL_PARAM_SEP + "origin=" + GetawayConfigs.WIKIPEDIA_CONSTRAINED_DOMAIN;

            // set the max length of the extract to retrieve
            request += GetawayConfigs.URL_PARAM_SEP + "exchars=" + GetawayConfigs.WIKIPEDIA_EXTRACT_MAX_LENGTH;

            request += GetawayConfigs.URL_PARAM_SEP + "titles=" + title;
        }

        return request;
    }

}

export default WikipediaApi;