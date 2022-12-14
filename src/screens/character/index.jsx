import React from "react";
import { useState } from "react";
import {View, Text, Image, Button, ScrollView} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addToProfile } from "../../store/actions";
import { COLORS } from "../../constants/themes/colors";
import {styles} from "./styles";

const Character = ({navigation}) => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.characters.selected);
   

    const [ disabled, setDisabled ] = useState(false);

    const { title, description, image } = character || {};

    const onAddToProfile = () => {
        dispatch(addToProfile(character));
        setDisabled(true);
    };

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text> 
                <Text style={styles.description}>{description}</Text> 
                <Image source={{ uri:image }} style={{width: 300, height:400,
                    resizeMode: 'cover', 
                    borderRadius: 20,
                    marginTop: 20,
                    marginBottom: 20,}}
                    />
                <Button
                    title="Add to Profile"
                    onPress={onAddToProfile} 
                    color={COLORS.icons}
                    disabled={disabled}
                    />
            </View>
        </ScrollView>
    )
}

export default Character;