import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";
import { Button, PaperProvider, Text, TextInput, useTheme } from "react-native-paper";

import styles, { darkTheme, lightTheme } from "./styles";
import Navs from "./pages/navs";
import Settings, { SettingsHeader } from "./pages/settings";

import { getItem } from "./libs/AsyncStorage";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ScrollView, View } from "react-native";
import { toggle, setDark } from "./redux/states/isDark";
import { add, reduce, set } from "./redux/states/counter";
import { useMemo, useState } from "react";
import { setRegion } from "./redux/states/region";
import { setLanguage } from "./redux/states/language";

const Stack = createNativeStackNavigator();

function App(){
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isDark = useAppSelector((state) => state.isDark.isDark);
  const count = useAppSelector((state) => state.counter.count);
  const insets = useSafeAreaInsets();

  const [number, setNumber] = useState<number>(0);

  // before the component mounts, load the storage
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

  return(
    <ScrollView style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      <View style={[
        styles.flexHorizontal,
        styles.gapX2
      ]}>
        <Text>isDark: {isDark.toString()}</Text>
        <Button onPress={() => dispatch(toggle())}>Toggle</Button>
      </View>

      <View style={[
        styles.flexHorizontal,
        styles.gapX2
      ]}>
        <Text>counter: {count}</Text>
        <Button onPress={() => dispatch(add())}>add</Button>
        <Button onPress={() => dispatch(reduce())}>subtract</Button>

        <TextInput 
          keyboardType="number-pad" 
          placeholder="0" 
          value={number.toString()}
          onChangeText={(text) => {
            if(text !== "" && !isNaN(parseInt(text)))
              setNumber(parseInt(text));
            else
              setNumber(0);
          }}
        />
        <Button
          onPress={() => {
            if(number !== null)
              dispatch(set(number));
          }}
        >set</Button>
      </View>
    </ScrollView>
  );
}

// function App() {
//   const isDark = useAppSelector((state) => state.isDark.isDark);
//   const insets = useSafeAreaInsets();

//   return (
//     <View style={{
//       paddingTop: insets.top,
//       paddingBottom: insets.bottom,
//       paddingLeft: insets.left,
//       paddingRight: insets.right,
//       flex: 1,
//     }}>
//       <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
//         <Stack.Navigator initialRouteName="home">
//           <Stack.Screen
//             name="home"
//             component={Navs}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="settings"
//             component={Settings}
//             options={(props) => {
//               return {
//                 headerShown: true,
//                 header: () => <SettingsHeader {...props} />
//               };
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

export default function AppProvider(){
  return(
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <App />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}