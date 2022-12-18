import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
    },
    footer:{
        margin: 10,
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: COLORS.gray,
    },
    buttonDisabled: {
        backgroundColor: COLORS.gray,
        borderRadius: 10,
        elevation: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,  
    },
    buttonConfirm: {
        backgroundColor: COLORS.light,
        borderRadius: 10,
        elevation: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,        
    },
    textButtonConfirm: {
        fontFamily: 'Mina',
        fontSize: 14,
        textAlign: 'center',
    },
});