import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.gray,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    header: {
        fontFamily:'Indie',
        fontSize: 30,
    },
    contentContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 15,
    },
  
});