import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: COLORS.background,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        minHeight: 320,
    },
    title:{
        fontSize: 25,
        fontFamily: 'Satisfy',
        marginVertical: 5,
        textAlign: 'center',
    },
    label:{
        fontSize: 15,
        fontFamily: 'Mina',
        marginVertical: 5,
    },
    input:{
        height: 45,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Mina',
        marginBottom: 10,
    },
    prompt:{
        width: '100%',
        alignItems: 'center',
        marginVertical: 15,
    },
    promptButton:{
        width: '100%',
        backgroundColor: COLORS.white,
        borderColor: COLORS.background,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptText:{
        fontFamily: 'Mina',
        fontSize: 12,
        color: COLORS.black,
    },
});