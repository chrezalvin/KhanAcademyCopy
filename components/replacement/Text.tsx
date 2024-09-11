import { Text as TextReact, TextProps as TextReactProps } from "react-native";
import {colorChoice} from "../../colors";

interface TextProps extends TextReactProps {
    colorVariant?: keyof typeof colorChoice;
}

export function Text(props: TextProps){
    return (
        <TextReact style={[
            props.style,
            {
                color: colorChoice[props.colorVariant ?? "dark"]
            },
        ]} {...props}>
            {props.children}
        </TextReact>
    );
}

export default Text;