import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeAreaWrapperProps {
    children: JSX.Element;
}

export function SafeAreaWrapper({children}: SafeAreaWrapperProps){
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            {children}
        </View>
    );

}

export default SafeAreaWrapper;