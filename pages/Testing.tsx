import { useState, useMemo } from "react";
import { ScrollView, View} from "react-native";
import { Text, useTheme, Button, TextInput } from "react-native-paper";
import { getItem } from "../libs/AsyncStorage";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { set, add, reduce } from "../redux/states/counter";
import { setDark, toggle } from "../redux/states/isDark";
import { setLanguage } from "../redux/states/language";
import { setRegion } from "../redux/states/region";
import RouteStackParamList from "../routes/routePage";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "../styles";

type TestingProps = NativeStackScreenProps<RouteStackParamList, "testing">;

export function Testing({navigation, route}: TestingProps){
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isDark = useAppSelector((state) => state.isDark.isDark);
  const count = useAppSelector((state) => state.counter.count);

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

export default Testing;