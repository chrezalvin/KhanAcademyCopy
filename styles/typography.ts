import { StyleSheet } from 'react-native';

export const typography = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexHorizontal: {
      flexDirection: 'row',
    },
    flexVertical: {
      flexDirection: 'column',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyEvenly: {
        justifyContent: 'space-evenly',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    alignItemsEnd: {
        alignItems: 'flex-end',
    },
    alignItemsStretch: {
        alignItems: 'stretch',
    },
    alignItemsBaseline: {
        alignItems: 'baseline',
    },
  });

export default typography;