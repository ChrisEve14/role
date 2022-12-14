import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { ProfileItem } from '../../components';

const Profile = ({ navigation }) => {
    const profile = useSelector((state) => state.profile.items);
    const onDelete = (id) => {
        console.warn('Delete', id);
    }

    const renderItem = ({ item }) => <ProfileItem item={item} onDelete={onDelete} />;
    
    const keyExtractor = (item) => item.id;

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                data={profile}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={null}>
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;