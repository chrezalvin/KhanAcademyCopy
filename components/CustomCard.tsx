import { Card, Text, useTheme } from "react-native-paper";
import styles from "../styles";
import colorStyle from "../styles/colors";
import { colors } from "../colors";
import { View } from "react-native";

export interface CustomCardProps {
    title: string;
    children: React.ReactNode;
    right?: JSX.Element;
}

export function CustomCard(props: CustomCardProps){
    const theme = useTheme();

    return (
        <View style={[
            {
                backgroundColor: theme.colors.surface, 
                borderTopWidth: 1,
                borderBottomWidth: 1, 
                borderColor: theme.colors.backdrop,
            },
            styles.flexVertical,
        ]}>
            <View
                style={[
                    styles.px4,
                    styles.borderMuted,
                    styles.justifyBetween,
                    styles.flexHorizontal,
                    styles.alignItemsCenter,
                    {
                        borderColor: theme.colors.background,
                        borderTopWidth: 0,
                        borderEndWidth: 0,
                        borderStartWidth: 0,
                        borderBottomWidth: 1,
                    }
                ]}
            >
                <Text 
                    style={[
                        styles.fwBolder,
                        styles.py2,
                    ]}
                    variant="titleMedium"
                >{props.title}</Text>

                {props.right}
            </View>
            <View>
                {props.children}
            </View>
        </View>
    );
}

export default CustomCard;