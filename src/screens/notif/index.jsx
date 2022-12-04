import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { NotificationItem } from '../../components';
import { NOTIFICATIONS } from '../../constants/data';

const Notif = ({ navigation }) => {

    const onDelete = (id) => {
        console.warn('Delete', id);
    };

    const renderItem = ({ item }) => <NotificationItem item={item} onDelete={onDelete}/>;
    return (
        <View style={styles.container}>
            <FlatList 
                data={NOTIFICATIONS}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Notif;