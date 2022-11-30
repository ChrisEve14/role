import React from "react";
import { SafeAreaView, FlatList} from 'react-native'
import { CATEGORIES }   from '../../constants/data/index';
import {styles} from "./styles"
import { CategoryItem } from "../../components";

const Categories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Characters', { categoryId: item.id, title: item.title, color: item.color })
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>;
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                    data={CATEGORIES}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.contentList}
            />
        </SafeAreaView>
    );
};

export default Categories;




// <View style={styles.container}>
// <Text style={styles.title}> Categories </Text> 
// <Button 
//     title= "Go to Characters"
//     color= {COLORS.primary}       
//     onPress= {() => navigation.navigate('Characters')}
// />
// </View>