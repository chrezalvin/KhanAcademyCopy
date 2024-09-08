import { Home, HomeHeader } from "./home";
import { Bookmarks, BookmarksHeader } from "./bookmarks";
import { Explore, ExploreHeader } from "./explore";

import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import Icon from "../../components/icon";

interface TabBarProps {
    focused: boolean;
    color: string;
    size: number;
}

interface NavProps {
    name: string,
    component: React.FC,
    header: React.FC<BottomTabHeaderProps>,
    icon: (props: TabBarProps) => JSX.Element,
}

export const navs: NavProps[] = [
    {
        name: "Home",
        component: Home,
        header: HomeHeader,
        icon: (props) => Icon({...props, name: "home"}),
    },
    {
        name: "Explore",
        component: Explore,
        header: ExploreHeader,
        icon: (props) => Icon({...props, name: "search"}),
    },
    {
        name: "Bookmarks", 
        component: Bookmarks,
        header: BookmarksHeader,
        icon: (props) => Icon({...props, name: "bookmark"}),
    },
];

export default navs;