import React from "react";
import {View, Text, Image, ScrollView} from 'react-native';
import { useSelector } from "react-redux";
import {styles} from "./styles";

const Character = ({navigation}) => {
    const character = useSelector((state) => state.characters.selected);
   
    const { title, description, image } = character || {};

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text> 
            <Text style={styles.description}>{description}</Text> 
            <Image source={{ uri:image }} style={{width: 300, height:400,
                resizeMode: 'cover', 
                borderRadius: 20,
                marginTop: 20 }}/>
        </View>
    )
}

export default Character;