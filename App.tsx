import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme
} from "react-native-paper";

import { 
  set,
  setDark,
  setLanguage,
  setRegion,
  store,
  useAppDispatch,
  useAppSelector, 
} from "./redux/";
import { Provider } from "react-redux";
import { useMemo } from "react";
import { getItem } from "./libs/AsyncStorage";
import AppProvider from "./AppProvider";

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    background: "#f0f0f0",
    backdrop: "rgb(240, 240, 240)",
  }
};

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    surface: "#0b214a",
    backdrop: "#2e3d5a"
  }
};

function App(){
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector(state => state.isDark.isDark);

  useMemo(() => {
    async function loadStorage(){
      const isDark = await getItem("isDark");
      const regionId = await getItem("regionId");
      const languageId = await getItem("languageId");
      const count = await getItem("count");
  
      if(isDark !== null)
        dispatch(setDark(isDark));
  
      if(regionId !== null)
        dispatch(setRegion(regionId));
  
      if(languageId !== null)
        dispatch(setLanguage(languageId));
  
      if(count !== null)
        dispatch(set(count));
    }

    loadStorage();
  }, [])

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  return(
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <AppProvider />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default function ReduxWrapper(){
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
}