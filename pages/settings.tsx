import { Switch, Text, TouchableOpacity, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../components/header";
import styles from "../styles";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { toggle } from "../redux/states/isDark";

interface Setting {
    name: string;
    value: boolean | string;
    onPress?: () => void;
}

type SettingsParams = {
    home: undefined;
    settings: undefined;
}

type SettingsProps = NativeStackScreenProps<SettingsParams>;

export function Settings(props: SettingsProps){
    const isDark = useAppSelector((state) => state.isDark.isDark);
    const dispatch = useAppDispatch();

    const settingsList: Setting[] = [
        {
            name: "Language & Region",
            value: "English",
        },
        {
            name: "Download Settings",
            value: true,
        },
        {
            name: "Sound Effects",
            value: true,
        },
        {
            name: "Dark Mode (Experimental)",
            value: false,
        },
        {
            name: "App Icon",
            value: "Default",
        }
    ];

    return (
        <View style={[styles.gapY4, styles.flexVertical, styles.bgMuted]}>
            <TouchableOpacity 
            style={[
                styles.container,
                styles.flexHorizontal,
                styles.py3,
                styles.px4,
                styles.justifyBetween
            ]}
            onPress={(_) => {dispatch(toggle())}}
            >
                <Text style={[styles.fwBold]}>Dark Mode (Experimental)</Text>
                <Switch 
                    value={isDark}
                    onValueChange={(_) => {dispatch(toggle())}}
                />
            </TouchableOpacity>
        </View>
    );
}

export function SettingsHeader(props: SettingsProps){
    return (
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
    );
}

export default Settings;