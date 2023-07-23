import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TaskDetailsEdit } from './TaskDetailsEdit';
import { RootStackParamList } from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const TaskDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (isEditing) navigation.setOptions({ title: 'Edit details' });
    else navigation.setOptions({ title: 'Details' });
  }, [isEditing]);

  const goBackToDetails = () =>
    setIsEditing(false);


  return (
    isEditing ? <TaskDetailsEdit goBackToDetails={goBackToDetails} /> :
      <View style={styles.taskContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Learn for math</Text>
          <Pressable onPress={() => setIsEditing(true)}>
            <Ionicons name='create-outline' size={25} />
          </Pressable>
        </View><Image
        style={styles.image}
        source={{ uri: 'https://media.os.fressnapf.com/cms/2020/04/Ratgeber-Rassenportrait-Mops_1200x527.jpg?t=cmsimg_920&f=webp' }} />
        <Text style={styles.keyValue}>Description:</Text>
        <Text style={styles.keyValue}>Localization:</Text>
        <Text style={styles.keyValue}>Date:</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'mintcream',
    borderColor: 'lightgrey',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    borderRadius: 10,
    padding: 20,
    margin: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 40,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    minHeight: 200,
    maxHeight: 200,
    borderRadius: 5,
    marginVertical: 15,
  },
  keyValue: {
    fontSize: 16,
  },
});