import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../constants/themes/colors';

const NotificationsItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>Characters Added: {item.total}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <FontAwesome name="trash-o" size={24} color={COLORS.icons}/>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default NotificationsItem;