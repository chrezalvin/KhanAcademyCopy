import { View } from "react-native";
import { Text } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import styles from "../styles";
import RouteStackParamList from "../routes/routePage";

type LanguageProps = NativeStackScreenProps<RouteStackParamList, "language">;

export function Language({}: LanguageProps){
    return (
        <View style={styles.container}>
            <Text>Language</Text>
        </View>
    );
}