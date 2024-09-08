import { Text, View } from "react-native";
import styles from "../../styles";
import { FontAwesome } from "@expo/vector-icons";

export function Home(){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export function HomeHeader(){
    return (
        <View style={[styles.container, styles.flexHorizontal, styles.padding, styles.shadow]}>
            <Text style={[styles.h3]}>Khan Academy (copy)</Text>
            <FontAwesome name="gear" style={styles.textPrimary} size={24}/>
        </View>
    );
}

export default Home;