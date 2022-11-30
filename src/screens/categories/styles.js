import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/themes/colors";
import { isAndroid } from "../../utils";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.background,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    title:{
        fontFamily: 'Satisfy',
        fontSize: 32,
        color: COLORS.black,
    },
    containerList: {
        flex: 1,
},
});