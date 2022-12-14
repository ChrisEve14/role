import { StyleSheet } from "react-native";
import {COLORS} from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    scroll:{
        flex: 1,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        margin: 15,
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