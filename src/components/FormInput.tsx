import {
  Controller,
  Control,
  FieldValues,
  GlobalError,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
  RegisterOptions,
} from 'react-hook-form';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

interface FormInputProps {
  control: Control<any, any>;
  errors: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions<any, string>;
  required?: boolean;
  errorMessage?: string;
  textInputProps?: TextInputProps;
  style?: Object;
}

export const FormInput = ({
                            control,
                            errors,
                            style,
                            name,
                            register,
                            placeholder,
                            registerOptions,
                            textInputProps,
                            required = true,
                            errorMessage = 'This field is required',
                          }: FormInputProps) => (
  <>
    <Controller
      control={control}
      rules={{
        required,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          style={[styles.input, style]}
          {...register(name, registerOptions)}
          {...textInputProps}
        />
      )}
      name={name}
    />
    <Text style={styles.errorMessage}>{errors[name]?.message.toString()}</Text>
  </>
);

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
  },
  errorMessage: {
    color: '#d52525',
  },
});
