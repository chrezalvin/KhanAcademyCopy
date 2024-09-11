import { View } from "react-native";
import {Text} from "../../components/replacement/Text";
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

interface HomeHeaderProps {
    onGearPress: () => void;
}

export function HomeHeader(props: HomeHeaderProps){
    return (
        <Header
            title="Khan Academy (copy)"
            right={<FontAwesome 
                    name="gear" 
                    style={styles.textPrimary} 
                    size={24}
                    onPress={props.onGearPress}
                    />
                }
            left={<View />}
        />
    );
}

export default Home;