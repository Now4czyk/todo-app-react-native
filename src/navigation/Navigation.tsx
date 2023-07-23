import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthScreen } from '../screens';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../store/auth-store';
import { useContext } from 'react';
import ActiveTodosScreen from '../screens/ActiveTodosScreen';
import ArchivedTodosScreen from '../screens/ArchivedTodosScreen';
import { TaskDetails } from '../components/TaskDetails';

export type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Todos: undefined;
  TodoDetails: { id: string };
  ActiveTodos: undefined;
  ArchivedTodos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        title: 'Todos',
        headerStyle: { backgroundColor: 'lightblue' },
        headerTintColor: 'black',
        drawerContentStyle: {
          backgroundColor: 'white',
        },
        drawerActiveTintColor: '#ec8a6a', drawerIcon: ({ color, size }) => (
          <Ionicons name='list' size={size} color={color} />
        ),
        headerRight: () => (
          <Ionicons
            name='exit-outline'
            size={24}
            onPress={logout}
            style={styles.exitIcon}
          />
        ),
      }}
    >
      <Drawer.Screen
        name='ActiveTodos'
        component={ActiveTodosScreen}
        options={{
          title: 'Active todos',
        }}
      />
      <Drawer.Screen
        name='ArchivedTodos'
        component={ArchivedTodosScreen}
        options={{
          title: 'Archived todos',
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
    <Stack.Screen name='Todos' component={DrawerNavigator} />
    <Stack.Screen name='TodoDetails'
                  options={{
                    headerShown: true,
                    title: 'Details',
                    headerStyle: { backgroundColor: 'lightblue' },
                    headerTintColor: 'black',
                    contentStyle: {
                      backgroundColor: 'white',
                    },
                  }}
                  component={TaskDetails} />
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
          backgroundColor: 'white',
        },
      }}
      name='Login'
    >
      {(props) => <AuthScreen {...props} isLoginScreen={true} />}
    </Stack.Screen>
    <Stack.Screen name='SingUp' component={AuthScreen} />
  </Stack.Navigator>
);

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      {!!isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exitIcon: {
    marginRight: 20,
  },
});
