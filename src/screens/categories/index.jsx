import React from "react";
import {View, Text, Button} from 'react-native'
import {styles} from "./styles"
import { colors } from "../../constants/themes/colors"

const Categories = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Categories </Text> 
            <Button 
                title= "Go to Characters"
                color= {colors.primary}       
                onPress= {() => navigation.navigate('Characters')}
            />
        </View>
    )
}

export default Categories;