import { Theme, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const darkTheme: Theme = {
    dark: true,
    colors: {
    ...DefaultTheme.colors,
      background: DefaultTheme.colors.text,
      card: DefaultTheme.colors.text,
      text: DefaultTheme.colors.background,
      border: DefaultTheme.colors.background,
      notification: DefaultTheme.colors.background,
    },
}

export const lightTheme: Theme = {
    dark: false,
    colors: DefaultTheme.colors,
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default styles;