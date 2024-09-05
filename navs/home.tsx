import { Text, View } from "react-native";
import styles from "../styles";

export function Tab(){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export function Header(){
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    );
}

export default Tab;