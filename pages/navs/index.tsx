import { Home, HomeHeader } from "./home";
import { Bookmarks, BookmarksHeader } from "./bookmarks";
import { Explore, ExploreHeader } from "./explore";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../../components/icon";

interface TabBarProps {
    focused: boolean;
    color: string;
    size: number;
}

interface NavElement {
    name: string,
    component: React.FC,
    header: React.FC<BottomTabHeaderProps>,
    icon: (props: TabBarProps) => JSX.Element,
}

type NavParams = {
    home: undefined;
    settings: undefined;
}

type NavProps = NativeStackScreenProps<NavParams>;

const Tab = createBottomTabNavigator();
export function Navs(props: NavProps){
    const navs: NavElement[] = [
        {
            name: "Home",
            component: Home,
            header: () => <HomeHeader onGearPress={() => props.navigation.push("settings")} />,
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

    const navScreens = navs.map((nav) => (
        <Tab.Screen 
          name={nav.name} 
          component={nav.component}
          options={{
            header: nav.header,
            tabBarIcon: nav.icon,
          }}
        />
    ));

    return (
        <Tab.Navigator>
          {navScreens}
        </Tab.Navigator>
    );
}

export default Navs;