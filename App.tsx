import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import navs from "./navs";

export default function App() {
  const Tab = createBottomTabNavigator();

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
        }}
      />
  ))

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {navScreens}
      </Tab.Navigator>
    </NavigationContainer>
  );
}