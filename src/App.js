
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Categories, Characters, Character } from './screens';
import { useFonts } from 'expo-font';

import AppNavigator from './navigation';


export default function App() {
  const [loaded] = useFonts({
    'Indie': require('../assets/fonts/IndieFlower-Regular.ttf'),
    'Satisfy': require('../assets/fonts/Satisfy-Regular.ttf'),
    'Mina-Bold': require('../assets/fonts/Mina-Bold.ttf'),
    'Mina': require ('../assets/fonts/Mina-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
      );
    }

  return <AppNavigator />
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
