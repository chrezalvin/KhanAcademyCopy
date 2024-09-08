import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Appearance } from "react-native";
import { darkTheme, lightTheme } from "./styles";
import Navs from "./pages/navs";
import Settings from "./pages/settings";

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = Appearance.getColorScheme() == "dark";

  return (
    <NavigationContainer theme={!isDarkMode ? darkTheme : lightTheme}>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Navs} />
        <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}