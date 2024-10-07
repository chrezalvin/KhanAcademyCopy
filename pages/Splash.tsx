import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RouteStackParamList from "../routes/routePage";
import { useEffect } from "react";
import styles from "../styles";

import AppLogo from "../assets/icons/art copy.svg";
import Animated, { SharedTransition, withSpring } from "react-native-reanimated";

interface SplashProps{
    // none
}

type SplashNavProps = NativeStackScreenProps<RouteStackParamList, "splash">;

const customTransition = SharedTransition.custom((values) => {
    return {
        height: withSpring(values.targetHeight),
        width: withSpring(values.targetWidth),
        originX: withSpring(values.targetOriginX),
        originY: withSpring(values.targetOriginY),
    };
});

export function Splash(props: SplashNavProps){
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("home");
        }, 2000);
    });

    return (
        <Animated.View 
            sharedTransitionTag="tag"
            sharedTransitionStyle={customTransition}
            style={[
                {
                    flex: 1,
                },
                styles.justifyCenter,
                styles.alignItemsCenter,
            ]}
        >
            <Animated.View style={[
                styles.p5,
                styles.roundedCircle,
                {
                    backgroundColor: `rgba(0, 0, 0, 0.1)`,
                }
            ]}>
                <AppLogo width={100} height={100} />
            </Animated.View>
        </Animated.View>
    );
}

export default Splash;