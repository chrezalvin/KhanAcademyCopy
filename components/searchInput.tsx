import { StyleProp, TextInput, View, ViewStyle } from "react-native";

interface SearchInputProps {
    style: StyleProp<ViewStyle>;
}

export function SearchInput(props: SearchInputProps){
    return (
        <View style={props.style}>

            <TextInput />
        </View>
    );
}

export default SearchInput;