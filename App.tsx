import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";

import { darkTheme, lightTheme } from "./styles";
import Navs from "./pages/navs";
import Settings, { SettingsHeader } from "./pages/settings";

import { useAppSelector } from "./redux/hooks";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  const isDark = useAppSelector((state) => state.isDark.isDark);
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      flex: 1,
    }}>
      <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Navs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="settings"
            component={Settings}
            options={(props) => {
              return {
                headerShown: true,
                header: () => <SettingsHeader {...props} />
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default function AppProvider(){
  return(
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
}