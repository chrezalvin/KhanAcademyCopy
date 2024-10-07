import {
    Language,
    Navs,
    Settings,
    SettingsHeader,
    Splash,
    Testing,
} from "./pages";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RouteStackParamList from "./routes/routePage";

export function AppProvider() {
    const Stack = createNativeStackNavigator<RouteStackParamList>();
  
    return (
      <Stack.Navigator 
        initialRouteName="splash"
      >
        <Stack.Screen 
          key={"splash"}
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          key={"home"}
          name="home"
          component={Navs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          key={"settings"}
          name="settings"
          component={Settings}
          options={(props) => {
            return {
              headerShown: true,
              header: () => <SettingsHeader {...props} />
            };
          }}
        />
        <Stack.Screen
          key={"language"}
          name="language"
          component={Language}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          key={"testing"}
          name="testing"
          component={Testing}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

export default AppProvider;