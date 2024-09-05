import { Text, View } from "react-native";
import styles from "../styles";

export function Home(){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export function HomeHeader(){
    return (
        <View style={styles.container}>
            <Text>Khan Academy (copy)</Text>
        </View>
    );
}

export default Home;