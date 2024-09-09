import { View, Text, TextInput } from "react-native";
import styles from "../../styles";
import Header from "../../components/header";
import SearchInput from "../../components/searchInput";

export function Explore(){
    return (
        <View style={[
            {
                flex: 1
            },
            styles.flexVertical
        ]}>
            <Text>Explore</Text>
            <View>
                
            </View>
        </View>
    );
}

export function ExploreHeader(){
    return (
        <Header 
            style={[styles.gap4]}
            left={<SearchInput />}
            right={<Text onPress={() => alert("Press")} style={[styles.textPrimary, styles.fwBold]}>Filter</Text>}
        />
    );
}

export default Explore;