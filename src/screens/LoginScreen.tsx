import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Button } from "../components/Button";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to see your todos</Text>
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
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
