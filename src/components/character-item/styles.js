import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 150,
    },
    item:{
        flex: 1,
        justifyContent: 'space-around',
    },
    title:{
        fontFamily: 'Mina',
        fontSize: 22,
    },
    detailContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description:{
        fontFamily: 'Indie',
    },
});