import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromProfile, confirmedProfile } from '../../store/actions';
import { styles } from './styles';
import { ProfileItem } from '../../components';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile.items);
    const onDelete = (id) => {
        dispatch(removeFromProfile(id));
    };
    const onCreateNotif = () => {
        dispatch(confirmedProfile(profile));
    };
 

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
                <TouchableOpacity 
                disabled={profile.length === 0} 
                style={profile.length === 0 ? styles.buttonDisabled : styles.buttonConfirm} 
                onPress={onCreateNotif}>
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;