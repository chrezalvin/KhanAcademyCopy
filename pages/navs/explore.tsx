import { View, Text, TextInput } from "react-native";
import styles from "../../styles";
import Header from "../../components/header";

export function Explore(){
    return (
        <View style={styles.container}>
            <Text>Explore</Text>
        </View>
    );
}

export function ExploreHeader(){
    return (
        <Header 
            style={[styles.gap4]}
            left={(
                <TextInput 
                  placeholder="Search"  
                  style={[
                    styles.bgMuted, 
                    styles.w100, 
                    styles.h100, 
                    styles.rounded2,
                    styles.p2,
                  ]}
                />
            )}
            right={<Text style={[styles.textPrimary, styles.fwBold]}>Filter</Text>}
        />
    );

    return (
        <View style={styles.container}>
            <Text>Explore</Text>
        </View>
    );
}

export default Explore;