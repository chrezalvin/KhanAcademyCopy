import isDarkConnector from "./isDark";
import counterConnector from "./counter";
import regionConnector from "./region";
import languageConnector from "./language";
import searchConnector from "./search";

export {
    add,
    reduce,
    set,
} from "./counter";

export {
    setDark,
    toggle,
} from "./isDark";

export {
    setRegion,
} from "./region";

export {
    setLanguage,
} from "./language";

export {
    setSearch,
} from "./search";

export const reducer = {
    isDark: isDarkConnector,
    counter: counterConnector,
    region: regionConnector,
    language: languageConnector,
    search: searchConnector,
}

export default reducer;