import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Mina',
    marginVertical: 5,
    color: COLORS.black,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'Mina',
    marginVertical: 5,
    color: COLORS.gray,
  },
});
