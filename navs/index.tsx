import Home, {Header} from "./home";
import Settings from "./settings";

export const navs = [
    {
        name: "Home", 
        component: Home,
        iconName: "home" as const,
        header: Header
    },
    {
        name: "Settings", 
        component: Settings,
        iconName: "gear" as const
    },
];

export default navs;