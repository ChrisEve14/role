import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input:{
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Mina',
    marginBottom: 10,
},
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Mina',
    color: COLORS.red,
  },
});
