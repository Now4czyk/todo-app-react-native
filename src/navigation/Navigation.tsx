import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import { HomeScreen, LoginScreen, SignupScreen } from "../screens";
import { StatusBar, StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      options={{
        contentStyle: {
          backgroundColor: "white",
        },
      }}
      name="Login"
      component={LoginScreen}
    />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const AuthenticatedStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: "white",
      contentStyle: { backgroundColor: Colors.primary100 },
    }}
  >
    <Stack.Screen name="Welcome" component={HomeScreen} />
  </Stack.Navigator>
);

export const Navigation = () => {
  const isAuthenticated = false;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
