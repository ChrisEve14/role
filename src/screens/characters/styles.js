import { StyleSheet } from "react-native";
import {colors} from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    title:{
        fontFamily: 'Satisfy',
        fontSize: 32,
        color: colors.black,
    },
});