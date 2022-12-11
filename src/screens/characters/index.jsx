import React from "react";
import { useEffect } from "react";
import {FlatList} from 'react-native'
import CharacterItem from "../../components/character-item";
import { useSelector, useDispatch } from "react-redux";
import { filterCharacters, selectCharacter } from '../../store/actions';
import {styles} from "./styles"

const Characters = ({navigation}) => {
    const category = useSelector((state) => state.category.selected);
    const filteredCharacters = useSelector((state) => state.characters.filteredCharacters);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(filterCharacters(category.id))
    }, []);
    
    const onSelected = (item) => {
        dispatch(selectCharacter(item.id));
        navigation.navigate('Character', {title: item.title});
    }
    
    const renderItem = ({ item }) => <CharacterItem item={item} onSelected={onSelected} color={category.color}/> 
    
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