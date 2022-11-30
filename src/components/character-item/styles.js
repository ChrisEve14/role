import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 100,
    },
    item:{
        flex: 1,
        justifyContent: 'space-around',
    },
    title:{
        fontFamily: 'Indie',
        fontSize: 20,
    },
    detailContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price:{
        fontFamily: 'Indie',
    },
    description:{
        fontFamily: 'Indie',
    },
});