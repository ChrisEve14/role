import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';

const ProfileItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.title}</Text>
                <Image source={{ uri:item.image }} style={{width: 200, height:250, marginTop: 20 }}/>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <FontAwesome name="trash-o" size={24} color={COLORS.icons}/>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default ProfileItem;