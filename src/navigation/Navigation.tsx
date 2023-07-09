import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../constants/colors";
import { AuthScreen, HomeScreen } from "../screens";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getStorageData } from "../utils/storage";

export type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "All Categories",
        headerStyle: { backgroundColor: "lightblue" },
        headerTintColor: "black",
        drawerContentStyle: {
          backgroundColor: "white",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#ec8a6a",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={() => <Text>dummy content</Text>}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={24}
              style={styles.settingsIcon}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AuthenticatedStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={DrawerNavigator} />
  </Stack.Navigator>
);

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
    >
      {(props) => <AuthScreen {...props} isLoginScreen={true} />}
    </Stack.Screen>
    <Stack.Screen name="SingUp" component={AuthScreen} />
  </Stack.Navigator>
);

export const Navigation = () => {
  const isAuthenticated = getStorageData("token");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!!isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsIcon: {
    marginRight: 20,
  },
});
