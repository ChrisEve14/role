import React from "react";
import {FlatList} from 'react-native'
import CharacterItem from "../../components/character-item";
import { CHARACTERS } from '../../constants/data/characters';
import {styles} from "./styles"

const Characters = ({navigation, route}) => {
    const { categoryId, color } = route.params;

    const filteredCharacters = CHARACTERS.filter(character => character.categoryId === categoryId);
    
    const onSelected = (item) => {
        navigation.navigate('Character', { title: item.title, characterId: item.id });
    }
    
    const renderItem = ({ item }) => <CharacterItem item={item} onSelected={onSelected} color={color}/> 
    
    return(
        <FlatList 
            data={filteredCharacters}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
        />
       
    )
}

export default Characters;



/* <View style={styles.container}>
<Text style={styles.title}>Characters</Text> 
<Button 
    title= "Go to Character"
    color= {COLORS.primary}
    onPress= {() => navigation.navigate('Character')}
/>
</View> */