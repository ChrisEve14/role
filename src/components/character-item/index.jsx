import React from   'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const CharacterItem = ({ item, onSelected, color }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color}}>
            <TouchableOpacity 
            style={styles.item}
            onPress={() => onSelected(item)}
            >
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default CharacterItem;
