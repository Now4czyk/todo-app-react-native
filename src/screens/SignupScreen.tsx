import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Button } from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Navigation";

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SingUp">;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>
        Please sign up to start creating your todos
      </Text>
      <View style={styles.form}>
        <TextInput
          autoComplete="email"
          accessibilityLabel="email"
          style={styles.input}
          onChangeText={(e) => setEmail(e)}
          value={email}
          placeholder="Email"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          autoComplete="password"
          style={styles.input}
          onChangeText={(p) => setPassword(p)}
          value={password}
          placeholder="Password"
          placeholderTextColor="lightgrey"
          secureTextEntry={true}
        />
        <Button title="Sign up" onPress={() => {}} />
      </View>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signupText}>Login</Text>
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
  input: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
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
  button: {},
});
