import { DefaultTheme } from "@react-navigation/native";
import { Appearance } from "react-native";

export const colors = {
    primary: DefaultTheme.colors.primary,
    dark: DefaultTheme.colors.text,
    light: DefaultTheme.colors.background,
    theme: "#21242c",
    muted: "#9ea0a3",
}

export const darkColors = {
    primary: DefaultTheme.colors.primary,
    dark: DefaultTheme.colors.text,
    light: DefaultTheme.colors.background,
    theme: "#21242c",
    muted: "#9ea0a3",
}

export const colorChoice = Appearance.getColorScheme() === "dark" ? darkColors : colors;

export default colorChoice;