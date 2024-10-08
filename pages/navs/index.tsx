import { Home, HomeHeader } from "./home";
import { Bookmarks, BookmarksHeader } from "./bookmarks";
import { Explore, ExploreHeader } from "./explore";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../../components/icon";
import RouteStackParamList from "../../routes/routePage";
import { useTheme } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styles from "../../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

type NavProps = NativeStackScreenProps<RouteStackParamList, "home">;

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function Navs(props: NavProps){
    const theme = useTheme();
    const insets = useSafeAreaInsets();

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
            header: () => <ExploreHeader />,
            icon: (props) => Icon({...props, name: "search"}),
        },
        {
            name: "Bookmarks", 
            component: Bookmarks,
            header: () => <BookmarksHeader />,
            icon: (props) => Icon({...props, name: "bookmark-o"}),
        },
    ];

    const navScreens = navs.map((nav) => (
        <Tab.Screen 
          key={nav.name}
          name={nav.name} 
          component={nav.component}
          options={{
            header: nav.header,
            tabBarIcon: nav.icon,
          }}
        />
    ));

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                },
                headerStyle: {
                    backgroundColor: theme.colors.surface,
                },
                tabBarActiveTintColor: styles.bgPrimary.backgroundColor,
                headerLeft: () => (<Drawer.Screen name="home" component={Home} />)
            }}
            safeAreaInsets={insets}
        >
            {navScreens}
        </Tab.Navigator>
    );
}

export default Navs;