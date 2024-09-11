import { View, ScrollView } from "react-native";
import {Text} from "../../components/replacement/Text";
import styles from "../../styles";
import Header from "../../components/header";
import SearchInput from "../../components/searchInput";

import dummyData from "../../dummyDataGenerator";
import GridView from "../../components/gridView";

export function Explore(){
    return (
        <ScrollView style={[
            {
                flex: 1
            },
            styles.flexVertical,
            styles.p4,
        ]}>
            <GridView 
                gap={10}
                rowCount={4}
                childrens={
                    dummyData.map(data => (
                        <View style={[
                            {
                                aspectRatio: 1
                            },
                            styles.flexVertical,
                            styles.alignItemsCenter,
                            styles.justifyCenter,
                            styles.bgPrimary,
                            styles.py3,
                            styles.roundedCircle,
                            styles.gapX1
                        ]}>
                            {data.icon}
                            <Text style={[
                                styles.textCenter,
                                styles.textLight,
                                styles.fwBold,
                            ]}>
                                {data.topic}
                            </Text>
                        </View>
                    ))
                }
            />
        </ScrollView>
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