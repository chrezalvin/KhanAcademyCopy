import Home, {HomeHeader} from "./home";
import Bookmarks, {BookmarksHeader} from "./bookmarks";
import Explore, {ExploreHeader} from "./explore";

import { BottomTabNavigationOptions, BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

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
        icon: (props) => <FontAwesome name="home" size={24} color={props.color} />,
    },
    {
        name: "Explore",
        component: Explore,
        header: ExploreHeader,
        icon: (props) => <FontAwesome name="search" size={24} color={props.color} />,
    },
    {
        name: "Bookmarks", 
        component: Bookmarks,
        header: BookmarksHeader,
        icon: (props) => <FontAwesome name="bookmark-o" size={24} color={props.color} />,
    },
];

export default navs;