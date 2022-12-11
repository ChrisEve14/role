import React from "react";
import { SafeAreaView, FlatList} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions";
import {styles} from "./styles"
import { CategoryItem } from "../../components";

const Categories = ({navigation}) => {
    const dispatch = useDispatch();
    const categories = useSelector ((state) => state.category.categories);
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Characters', { title: item.title })
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>;
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                    data={categories}
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