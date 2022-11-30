import { StyleSheet } from "react-native";
import {COLORS} from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.background,
    },
    title:{
        fontFamily: 'Satisfy',
        fontSize: 32,
        color: COLORS.black,
    },
});