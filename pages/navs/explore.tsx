import { View, ScrollView } from "react-native";
import { ActivityIndicator, Text, TextInput, useTheme } from "react-native-paper";
import styles from "../../styles";
import Header from "../../components/header";

import GridView from "../../components/gridView";
import coursesData from "../../assets/coursesData.json";
import { Link } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { setSearch, useAppDispatch, useAppSelector } from "../../redux";
import { reset } from "../../redux/states/search";
import LessonIcon from "../../components/LessonIcon";
import lessonData from "../../assets/lessonData.json";
import CourseHorizontal from "../../components/CourseHorizontal";

type LessonData = (typeof lessonData[number]) | (typeof lessonData[number]["allOrderedChildren"]);

interface Lessons{
    title: string;
    imgSource: {uri: string};
    label: string;
}

export function Explore(){
    const theme = useTheme();
    const search = useAppSelector(state => state.search.search);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchedData, setSearchedData] = useState<Lessons[] | null>(null);
    const [filter, setFilter] = useState<string | null>(null);

    // basic debouncing for search
    useEffect(() => {
        const timeout = setTimeout(async () => {
            setIsSearching(true);
            
            if(search !== null){
                // waits for 500ms
                await new Promise(resolve => setTimeout(resolve, 500));

                const data: Lessons[] = [];

                for(const lesson of lessonData){
                    if(lesson.translatedTitle.toLowerCase().includes(search.toLowerCase()))
                        data.push({
                            imgSource: {uri: lesson.iconPath},
                            label: `${lesson.allOrderedChildren.length} Lesson`,
                            title: lesson.translatedTitle,
                        });

                    for(const course of lesson.allOrderedChildren)
                        if(course.translatedTitle.toLowerCase().includes(search.toLowerCase()))
                            data.push({
                                imgSource: {uri: lesson.iconPath},
                                label: "",
                                title: course.translatedTitle,
                            });
                }

                setSearchedData(data);
            }
            else
                setSearchedData(null);

            setIsSearching(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [search]);

    return isSearching ? (
            <View style={{
                flex: 1,
                justifyContent: "center",
            }}>
                <ActivityIndicator 
                    animating={true}
                    color={theme.colors.secondary}
                    size={120}
                />
            </View>
        ) : (
            <ScrollView style={[
                {
                    flex: 1,
                    backgroundColor: theme.colors.surface,
                },
                styles.flexVertical,
                styles.p4,
            ]}>
                {
                    searchedData === null ? [
                        (
                            <View style={[
                                styles.flexHorizontal,
                                styles.justifyBetween,
                                styles.pb2,
                                styles.mb4,
                                {
                                    borderColor: theme.colors.backdrop,
                                    borderBottomWidth: 1,
                                    borderEndWidth: 0,
                                    borderStartWidth: 0,
                                    borderTopWidth: 0,                    
                                }
                            ]}>
                                <Text
                                    variant="titleMedium"
                                    style={[styles.fwBolder]}
                                >Browse Khan Academy</Text>
                                <Link 
                                    to="/"
                                    style={[styles.textPrimary, styles.fwBold]}
                                >Surprise me!</Link>
                            </View>
                        ),
                        (
                            <GridView 
                                gap={20}
                                rowCount={4}
                                childrens={
                                    coursesData
                                    .slice(4, 12)
                                    .map(data => (
                                        <LessonIcon
                                            image={data.icon}
                                            title={data.translatedTitle}
                                        />
                                    ))
                                }
                            />
                        )
                    ] : searchedData
                    .map(data => (
                        <CourseHorizontal
                            title={data.title}
                            imgSource={data.imgSource}
                            label={data.label}
                        />
                    ))
                }
            </ScrollView>
        );
}

export function ExploreHeader(){
    const search = useAppSelector(state => state.search.search);
    const dispatch = useAppDispatch();
    const theme = useTheme();

    const openFilter = (_: any) => {

    };

    return (
        <Header 
            style={[
                {
                    backgroundColor: theme.colors.surface,
                },
                styles.gap4
            ]}
            left={
            <TextInput 
                value={search ?? ""}
                onChange={(e) => dispatch(setSearch(e.nativeEvent.text))}
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                placeholder="Search"
                left={<TextInput.Icon icon="magnify" />}
                style={[{
                        flex: 1,
                        borderBottomColor: "transparent",
                        height: 40,
                        backgroundColor: theme.colors.background,
                    }, 
                    styles.rounded3,
                ]}
                right={search && <TextInput.Icon 
                    icon="close" 
                    size={18}
                    onPress={() => dispatch(reset())}
                />}
            />}
            right={<Text
                onPress={search === null ? undefined : openFilter}
                style={[
                    search === null ? styles.textMuted : styles.textPrimary, 
                    styles.fwBold
                ]}
            >Filter</Text>}
        />
    );
}

export default Explore;