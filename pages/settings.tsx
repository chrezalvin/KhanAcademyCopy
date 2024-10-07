import { ScrollView, Switch, TouchableOpacity, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../components/header";
import styles from "../styles";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { toggle } from "../redux/states/isDark";
import { Surface, Text, useTheme } from "react-native-paper";
import RouteStackParamList from "../routes/routePage";

interface Setting {
    name: string;
    value: boolean | string;
    onPress?: () => void;
}

type SettingsProps = NativeStackScreenProps<RouteStackParamList>;

export function Settings(props: SettingsProps){
    const isDark = useAppSelector((state) => state.isDark.isDark);
    const dispatch = useAppDispatch();

    const theme = useTheme();

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
        <ScrollView style={[
            {
                flex: 1,
                backgroundColor: theme.colors.background,
            }
        ]}>
            <Surface style={[styles.gapY4, styles.flexVertical]}>
                <TouchableOpacity 
                    style={[
                        styles.container,
                        styles.flexHorizontal,
                        styles.py3,
                        styles.px4,
                        styles.justifyBetween,
                        {
                            backgroundColor: theme.colors.background,
                        }
                    ]}
                    onPress={(_) => {dispatch(toggle())}}
                >
                    <Text style={[styles.fwBold]}>Dark Mode (Experimental)</Text>
                    <Switch 
                        value={isDark}
                        // onValueChange={(_) => {dispatch(toggle())}}
                    />
                </TouchableOpacity>
            </Surface>
            <View
                style={[
                    styles.py3,
                    styles.justifyCenter,
                    styles.flexVertical,
                ]}
            >
                <Text style={[{color: theme.colors.secondary}, styles.textCenter]}>Khan Academy (Copy) 1.0.0</Text>
                <Text style={[{color: theme.colors.secondary}, styles.textCenter]}>Copied from Khan Academy 8.2.0 (103582) v10</Text>
                <Text style={[{color: theme.colors.secondary}, styles.textCenter]}>Developed by: Chrealvin (00000045606)</Text>
            </View>
        </ScrollView>
    );
}

export function SettingsHeader(props: SettingsProps){
    const theme = useTheme();

    return (
        <Header 
            style={{
                backgroundColor: theme.colors.surface,
            }}
            title="Settings"
            left={(<View>
                <Text 
                    onPress={() => props.navigation.goBack()}
                    style={[styles.textPrimary, styles.fwBold]}
                >Back</Text>
            </View>)} 
            right={<View />}
        />
        // <Appbar.Header mode="center-aligned">
        //     <Appbar.BackAction />
        //     <Appbar.Content title="Settings" />
        // </Appbar.Header>
        // <Header 
        //     title="Settings"
        //     left={(<View>
        //         <Text 
        //             onPress={() => props.navigation.goBack()}
        //             style={[styles.textPrimary, styles.fwBold]}
        //         >Back</Text>
        //     </View>)} 
        //     right={<View />}
        // />
    );
}

export default Settings;