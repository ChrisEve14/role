import React from "react";
import {View, Text, Image} from 'react-native';
import { CHARACTERS } from '../../constants/data/characters';
import {styles} from "./styles";

const Character = ({navigation, route}) => {
    const { characterId } = route.params;

    const filteredCharacter = CHARACTERS.find((character) => character.id === characterId)

    const { title, description, image } = filteredCharacter || {};

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text> 
            <Text style={styles.description}>{description}</Text> 
            <Image source={{ uri:image }} style={{width: 300, height:400, marginTop: 20 }}/>
        </View>
    )
}

export default Character;