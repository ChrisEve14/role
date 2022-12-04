import { StyleSheet } from "react-native";
import {COLORS} from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    title:{
        fontFamily: 'Mina',
        fontSize: 32,
        color: COLORS.black,
    },
    description:{
        fontFamily: 'Indie',
        fontSize: 20,
        marginTop: 20,
        padding: 20,
    }
});