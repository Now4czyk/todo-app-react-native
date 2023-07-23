import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FormInput } from './FormInput';
import { useForm } from 'react-hook-form';
import { FC, useMemo } from 'react';
import { Button } from '../components/Button';

interface TaskDetailsEditProps {
  goBackToDetails: () => void;
}

export const TaskDetailsEdit: FC<TaskDetailsEditProps> = ({ goBackToDetails }) => {
  const fetchedData = {
    title: 'Dummy title',
    description: '',
    photo: 'Dummy photo',
    localization: 'Dummy localization',
    date: 'Dummy date',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: fetchedData,
  });

  const inputProps = useMemo(() => ({
    control, errors, register,
    style: styles.input,
    textInputProps: { placeholderTextColor: 'lightgrey' },
  }), []);

  return <View style={styles.taskContainer}>
    <FormInput placeholder='Title' name='title' {...inputProps} />
    <FormInput placeholder='Description' name='description' {...inputProps} />
    <FormInput placeholder='Photo' name='photo'  {...inputProps} />
    <FormInput placeholder='Localization' name='localization'  {...inputProps} />
    <FormInput placeholder='Date' name='date' {...inputProps} />
    <Button
      title='Edit'
      onPress={goBackToDetails}
    />
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={goBackToDetails}
    >
      <Text style={styles.submitText}>
        Cancel
      </Text>
    </Pressable>
  </View>;
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
  input: {
    color: '#333',
  },
  pressed: {
    textAlign: 'center',
    opacity: 0.2,
  },
  submitText: {
    marginTop: 20,
    fontSize: 17,
    textAlign: 'center',
  },
});