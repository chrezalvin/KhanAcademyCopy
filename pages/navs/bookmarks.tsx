import { ScrollView, View } from "react-native";
import styles from "../../styles";
import Header from "../../components/header";
import { Icon, useTheme, Text } from "react-native-paper";
import CourseHorizontal from "../../components/CourseHorizontal";
import courseData from "../../assets/coursesData.json";

export function Bookmarks(){
    const theme = useTheme();
    
    return (
        <ScrollView
            style={[
                {
                    backgroundColor: theme.colors.surface,
                }
            ]}
        >
            <View style={[
                styles.py3,
                styles.px2,
                styles.borderMuted,
                {
                    borderColor: theme.colors.backdrop,
                    borderBottomWidth: 1,
                }
            ]}>
                <Text>Download settings</Text>
            </View>
            <CourseHorizontal 
                imgSource={{uri: courseData[0].icon}}
                title={courseData[0].translatedTitle}
                subtitle={courseData[0].translatedTitle}
                label="Math"
                right={(
                    <View
                        style={[
                            styles.flexVertical,
                            styles.alignItemsCenter,
                            styles.gap2,
                        ]}
                    >
                        <Icon source="download" size={32} color={theme.colors.secondary} />
                        <Text style={{
                            color: theme.colors.secondary,
                        }}>12MB</Text>
                    </View>
                )}
            />
        </ScrollView>
    );
}

export function BookmarksHeader(){
    const theme = useTheme();

    return (
        <Header 
            style={{
                backgroundColor: theme.colors.surface,
            }}
            title="Bookmarks"
            right={(
                <Text
                    style={[
                        styles.textPrimary,
                    ]}
                >Edit</Text>
            )}
        />
    );
}

export default Bookmarks;