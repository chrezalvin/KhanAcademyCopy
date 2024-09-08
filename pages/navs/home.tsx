import { Text, View } from "react-native";
import styles from "../../styles";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/header";

export function Home(){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export function HomeHeader(){
    return (
        <Header
            title="Khan Academy (copy)"
            right={<FontAwesome name="gear" style={styles.textPrimary} size={24}/>}
            left={<View />}
        />
    );
}

export default Home;