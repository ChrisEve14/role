import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ProfileItem } from '../../components';
import { PROFILE } from '../../constants/data';

const Profile = ({ navigation }) => {

    const onDelete = (id) => {
        console.warn('Delete', id);
    }

    const renderItem = ({ item }) => <ProfileItem item={item} onDelete={onDelete} />;
    
    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                data={PROFILE}
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