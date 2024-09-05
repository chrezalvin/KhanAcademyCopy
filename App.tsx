import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Appearance, View } from "react-native";
import { darkTheme, lightTheme } from "./styles";
import navs from "./navs";

export default function App() {
  const Tab = createBottomTabNavigator();
  const isDarkMode = Appearance.getColorScheme() == "dark";

  const navScreens = navs.map((nav) => (
      <Tab.Screen 
        name={nav.name} 
        component={nav.component}
        options={{
          header: nav.header,
          tabBarIcon: nav.icon
        }}
      />
  ))

  return (
    <NavigationContainer theme={!isDarkMode ? darkTheme : lightTheme}>
      <Tab.Navigator>
        {navScreens}
      </Tab.Navigator>
    </NavigationContainer>
  );
}