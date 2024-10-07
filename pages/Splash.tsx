import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RouteStackParamList from "../routes/routePage";
import { useEffect } from "react";
import styles from "../styles";

import AppLogo from "../assets/icons/art copy.svg";
import { View } from "react-native";

type SplashNavProps = NativeStackScreenProps<RouteStackParamList, "splash">;

export function Splash(props: SplashNavProps){
    useEffect(() => {

        // go to home after 2 seconds
        setTimeout(() => {
            props.navigation.replace("home");
        }, 2000);
    });

    return (
        <View 
            style={[
                {
                    flex: 1,
                },
                styles.justifyCenter,
                styles.alignItemsCenter,
            ]}
        >
            <View style={[
                styles.p5,
                styles.roundedCircle,
                {
                    backgroundColor: `rgba(0, 0, 0, 0.1)`,
                }
            ]}>
                <AppLogo width={100} height={100} />
            </View>
        </View>
    );
}

export default Splash;