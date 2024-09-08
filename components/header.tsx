import { View, Text, StyleProp, ViewStyle } from "react-native";
import styles from "../styles";

interface HeaderProps {
    title?: string;
    left?: JSX.Element;
    right?: JSX.Element;
    style?: StyleProp<ViewStyle>;
}

export function Header(props: HeaderProps){
    return (
        <View 
            style={[
                {
                    minHeight: 50,
                },
                styles.container, 
                styles.flexHorizontal, 
                styles.padding, 
                styles.shadow, 
                styles.justifyBetween,
                props.style
            ]}
        >
            {props.left}
            {props.title ? <Text style={[styles.h4]}>{props.title}</Text> : null}
            {props.right}
        </View>
    );
}

export default Header;