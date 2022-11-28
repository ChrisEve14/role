import React from "react";
import {View, Text, Button} from 'react-native'
import { colors } from "../../constants/themes/colors";
import {styles} from "./styles"

const Characters = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Characters</Text> 
            <Button 
                title= "Go to Character"
                color= {colors.primary}
                onPress= {() => navigation.navigate('Character')}
            />
        </View>
    )
}

export default Characters;