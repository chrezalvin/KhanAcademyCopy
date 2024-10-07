import { Image, View } from "react-native";
import styles from "../styles";
import { Text } from "react-native-paper";

export interface LessonIconProps {
    image: string;
    title: string;
}

export function LessonIcon({image, title}: LessonIconProps){
    return (
        <View style={[styles.flexVertical, styles.alignItemsCenter, styles.gap3]}>
            <Image 
                source={{uri: image}}
                style={[styles.roundedCircle, {width: 75, height: 75}]}
            />
            <Text style={[styles.textCenter, styles.fwBold]}>
                {title}
            </Text>
        </View>
    );
}

export default LessonIcon;