import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Navigation";
import { useForm } from "react-hook-form";
import { FormInput } from "../components/FormInput";
import { getStorageData, setStorageData } from "../utils/storage";
interface LoginScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Login"> {
  isLoginScreen?: boolean;
}

export const AuthScreen = ({ navigation, isLoginScreen }: LoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) =>
    isLoginScreen
      ? setStorageData({ id: "token", value: data.email })
      : getStorageData({ id: "token" });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLoginScreen ? "Log in" : "Sign up"}</Text>
      <Text style={styles.subtitle}>
        {isLoginScreen
          ? "Please sign in to see your todos"
          : "Please sign up to start creating your todos"}
      </Text>
      <View style={styles.form}>
        <FormInput
          control={control}
          errors={errors}
          name="email"
          placeholder="Email"
          textInputProps={{
            placeholderTextColor: "lightgrey",
            autoComplete: "email",
            accessibilityLabel: "email",
          }}
        />
        <FormInput
          control={control}
          errors={errors}
          name="password"
          placeholder="Password"
          textInputProps={{
            placeholderTextColor: "lightgrey",
            autoComplete: "password",
            secureTextEntry: true,
          }}
        />
        <Button
          title={isLoginScreen ? "Log in" : "Sign up"}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => navigation.navigate(isLoginScreen ? "SingUp" : "Login")}
      >
        <Text style={styles.signupText}>
          {isLoginScreen ? "Sign up" : "Log in"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    textAlign: "center",
    opacity: 0.2,
  },
  signupText: {
    marginTop: 20,
    fontSize: 17,
    textAlign: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
  },

  container: {
    flex: 1,
    margin: 50,
    marginTop: 150,
  },
  form: {
    marginTop: 30,
    justifyContent: "space-between",
    height: 200,
  },
});
