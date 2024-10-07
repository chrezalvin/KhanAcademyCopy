import { Image, ImageSourcePropType, View } from "react-native";
import styles from "../styles";
import { Text, useTheme } from "react-native-paper";

export interface CourseHorizontalProps{
    imgSource: ImageSourcePropType;
    title: string;
    subtitle?: string;
    label?: string;
    right?: React.ReactNode;
}

export function CourseHorizontal(props: CourseHorizontalProps){
    const theme = useTheme();

    return (
        <View
            style={[
                {
                    borderWidth: 1,
                    borderColor: theme.colors.backdrop,
                    borderEndWidth: 0,
                    borderStartWidth: 0,
                },
                styles.px4,
                styles.py3,
                styles.flexHorizontal,
                styles.gap3,
                styles.justifyBetween,
            ]}
        >
            <Image 
                source={props.imgSource}
                style={[styles.roundedCircle, {width: 32, height: 32}]}
            />
            <View
                style={{
                    flex: 1,
                }}
            >
                {
                    props.label 
                    && 
                    <Text variant="labelLarge" style={[
                        styles.textMuted,
                    ]}>{props.label}</Text>
                }
                <Text variant="titleSmall">{props.title}</Text>
                {
                    props.subtitle 
                    && 
                    <Text variant="labelMedium" style={[
                        styles.textMuted,
                    ]}>{props.subtitle}</Text>
                }
            </View>
            {props.right}
        </View>
    );
}

export default CourseHorizontal;