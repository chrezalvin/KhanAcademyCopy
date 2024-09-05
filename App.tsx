import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

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
          tabBarIcon: (props) => <FontAwesome 
            name={nav.iconName} 
            size={24}
            color={props.color}
          />,
          headerTitleAlign: "center",
          headerRight: (props) => (
            <View style={{
              marginRight: 10
            }}>
              <FontAwesome 
                name="gear" 
                size={24}
                color={props.pressColor}
              />
            </View>
          )
        }}
      />
  ))

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <Tab.Navigator>
        {navScreens}
      </Tab.Navigator>
    </NavigationContainer>
  );
}