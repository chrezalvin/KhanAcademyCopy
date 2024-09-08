import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../components/header";
import styles from "../styles";

type SettingsParams = {
    home: undefined;
    settings: undefined;
}

type SettingsProps = NativeStackScreenProps<SettingsParams>;

export function Settings(props: SettingsProps){
    return (
        <View>
            <Header 
                title="Settings"
                left={(<View>
                    <Text 
                        onPress={() => props.navigation.goBack()}
                        style={[styles.textPrimary, styles.fwBold]}
                    >Back</Text>
                </View>)} 
                right={<View />}
            />
            <Text>Settings</Text>
        </View>
    );
}

export default Settings;