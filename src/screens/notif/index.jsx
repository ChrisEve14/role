import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { NotificationItem } from '../../components';
import { getNotif, deleteNotif } from '../../store/actions/notif.action';
import { useSelector, useDispatch } from 'react-redux';

const Notif = ({ navigation }) => {

    const dispatch = useDispatch();

    const notifs = useSelector((state) => state.notifs.list);

    const onDelete = (id) => {
        dispatch(deleteNotif(id));
    };

    useFocusEffect(
        useCallback(() => {
          dispatch(getNotif());
        }, [dispatch])
      );

    const renderItem = ({ item }) => <NotificationItem item={item} onDelete={onDelete}/>;
    return (
        <View style={styles.container}>
            <FlatList 
                data={notifs}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Notif;