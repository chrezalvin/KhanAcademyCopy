import { Theme, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import colors from "./colors";

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

export const fontStyle = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export const typography = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const colorStyle = StyleSheet.create({
  textPrimary: {
    color: colors.primary,
  },
  textDark: {
    color: colors.dark,
  },
  textLight: {
    color: colors.light,
  },
  textMuted: {
    color: colors.muted,
  },
  textTheme: {
    color: colors.theme,
  },
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgDark: {
    backgroundColor: colors.dark,
  },
  bgLight: {
    backgroundColor: colors.light,
  },
  bgMuted: {
    backgroundColor: colors.muted,
  },
  bgTheme: {
    backgroundColor: colors.theme,
  },
  borderPrimary: {
    borderColor: colors.primary,
  },
  borderDark: {
    borderColor: colors.dark,
  },
  borderLight: {
    borderColor: colors.light,
  },
  borderMuted: {
    borderColor: colors.muted,
  },
  borderTheme: {
    borderColor: colors.theme,
  },
});

export const styles = StyleSheet.create({
    ...typography,
    ...fontStyle,
    ...colorStyle,
});

export default styles;