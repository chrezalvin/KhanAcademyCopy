import { View, Image, ScrollView, ImageBackground } from "react-native";
import styles from "../../styles";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/header";
import CustomCard from "../../components/CustomCard";
import { Button, Icon, Text, useTheme } from "react-native-paper";
import coursesData from "../../assets/coursesData.json";
import GridView from "../../components/gridView";
import space from "../../assets/space.png";
import LessonIcon from "../../components/LessonIcon";
import {DrawerNavigationProp, } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import lessonData from "../../assets/lessonData.json";

export function Home(){
    const theme = useTheme();

    const courses = lessonData[2].allOrderedChildren.slice(0, 3).map((course) => (
        <View
            style={[
                {
                    borderWidth: 1,
                    borderColor: theme.colors.background,
                    borderEndWidth: 0,
                    borderStartWidth: 0,
                },
                styles.px4,
                styles.py3,
                styles.flexHorizontal,
                styles.gap3,
            ]}
        >
            <Image 
                source={{uri: lessonData[2].iconPath}}
                style={[styles.roundedCircle, {width: 32, height: 32}]}
            />
            <View>
                <Text variant="titleSmall">{course.translatedTitle}</Text>
                <Text variant="labelLarge" style={[
                    styles.textMuted,
                ]}>{lessonData[2].translatedTitle}</Text>
            </View>
        </View>
    ));

    return (
        <ScrollView
            style={[
                styles.py4,
            ]}
            contentContainerStyle={[
                styles.gap4
            ]}
        >
            <ImageBackground
                source={space} 
                resizeMode="cover"
                imageStyle={{
                    width: "100%",
                    height: "100%",
                }}
                style={{
                    height: 200,
                    backgroundColor: "#0c0a5b",
                    justifyContent: "center",
                }}
            >
                <View style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "white",
                    position: "absolute",
                    right: 5,
                    top: 5,
                    zIndex: 10,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Icon 
                        source="close"
                        color="grey"
                        size={16}
                    />
                </View>
                <View
                    style={[
                        {
                            maxWidth: 300,
                        },
                        styles.px4,
                        styles.gap2
                    ]}
                >
                    <Text
                        variant="titleLarge"
                        style={[
                            styles.fwBold,
                            styles.textLight,
                        ]}
                    >Need to add a class?</Text>
                    <Text
                        variant="labelLarge"
                        style={[
                            styles.textLight,
                        ]}
                    >Add your teacher with their class code or email address</Text>
                    <Button
                        style={[
                            {
                                width: 100,
                            },
                            styles.bgPrimary,
                            styles.rounded1,
                        ]}
                        labelStyle={[
                            styles.textLight,
                            styles.fwBold,
                        ]}
                    >
                        Join class
                    </Button>
                </View>
            </ImageBackground>

            <CustomCard
                title="Recent lessons"
            >
                {courses}
            </CustomCard>

            <CustomCard
                title="My courses"
                right={
                <Text 
                    style={[
                        styles.textPrimary,
                    ]}
                    variant="titleMedium"
                >Edit</Text>
                }
            >
                <View style={[styles.py4]}>
                    <GridView
                        gap={20}
                        rowCount={4}
                        childrens={
                            coursesData.slice(4, 12).map(data => (
                                <LessonIcon
                                    image={data.icon}
                                    title={data.translatedTitle}
                                />
                            ))
                        }
                    />
                </View>
            </CustomCard>
        </ScrollView>
    );
}

interface HomeHeaderProps {
    onGearPress: () => void;
}

export function HomeHeader(props: HomeHeaderProps){
    const theme = useTheme();

    interface Setting {
        name: string;
        value: boolean | string;
        onPress?: () => void;
    }
    
    type SettingsProps = DrawerNavigationProp<ParamListBase>;

    return (
        <Header
            title="Khan Academy (copy)"
            style={{
                backgroundColor: theme.colors.surface,
            }}
            right={
                <FontAwesome
                    name="gear" 
                    style={styles.textPrimary} 
                    size={24}
                    onPress={props.onGearPress}
                />
            }
            left={<View />}
        />
    );
}

export default Home;