import isDarkConnector from "./isDark";
import counterConnector from "./counter";
import regionConnector from "./region";
import languageConnector from "./language";

export const reducer = {
    isDark: isDarkConnector,
    counter: counterConnector,
    region: regionConnector,
    language: languageConnector,
}

export default reducer;