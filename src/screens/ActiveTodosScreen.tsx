import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Task } from '../components/Task';

const ActiveTodosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </ScrollView>
  );
};

export default ActiveTodosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 15,
  },
});