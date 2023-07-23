import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const Task = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return <Pressable onPress={() => navigation.navigate('TodoDetails')}
                    style={styles.taskContainer}>
    <Text style={styles.title}>Learn for math</Text>
    <Image
      style={styles.image}
      source={{ uri: 'https://media.os.fressnapf.com/cms/2020/04/Ratgeber-Rassenportrait-Mops_1200x527.jpg?t=cmsimg_920&f=webp' }} />
  </Pressable>;
};
const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'mintcream',
    borderColor: 'lightgrey',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.09,
    shadowRadius: 2,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  image: {
    width: '100%',
    maxHeight: 200,
    minHeight: 200,
    borderRadius: 5,
    marginVertical: 15,
  },
});