import { Text, View } from "react-native";
import styles from "../../styles";
import Header from "../../components/header";

export function Bookmarks(){
    return (
        <View style={styles.container}>
            <Text>Bookmarks</Text>
        </View>
    );
}

export function BookmarksHeader(){
    return (
        <Header 
            title="Bookmarks"
        />
    );
}

export default Bookmarks;