import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadium: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 160,
    },
    contentContainer:{
        flex: 1,
        borderRadium: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title:{
        fontSize: 18,
        fontFamily: 'Indie',
        color: COLORS.black,
    },
});