import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import styles from "../styles";
import Icon from "./icon";

interface SearchInputProps {
    style?: StyleProp<ViewStyle>;
}

export function SearchInput(props: SearchInputProps){
    return (
        <View style={[
            {
                flex: 1,
                height: "100%",
            },
            styles.flexHorizontal,
            styles.gapY2,
            styles.alignItemsCenter,
            styles.bgMuted,
            styles.pl1,
            styles.rounded3
        ]}>
            <Icon name="search" color="black" />
            <TextInput 
                style={[
                    {
                        flex: 1,
                        height: "100%",
                    },
                    styles.p2
                ]}
                placeholder="Search"
            />
        </View>
    );
}

export default SearchInput;