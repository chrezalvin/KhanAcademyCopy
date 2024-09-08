import { StyleSheet } from 'react-native';

export const fontStyle = StyleSheet.create({
    fwNormal:{
      fontWeight: 'normal',
    },
    fwBold:{
      fontWeight: 'bold',
    },
    fwBolder: {
      fontWeight: "600"
    },
    italic:{
      fontStyle: 'italic',
    },
    underline:{
      textDecorationLine: 'underline',
    },
    strikethrough:{
      textDecorationLine: 'line-through',
    },
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
    paddingVertical: {
      paddingVertical: 10,
    },
    paddingHorizontal: {
      paddingHorizontal: 10,
    },
    padding: {
      padding: 10,
    },
    marginVertical: {
      marginVertical: 10,
    },
    marginHorizontal: {
      marginHorizontal: 10,
    },
    margin: {
      margin: 10,
    },
  });

export default fontStyle;