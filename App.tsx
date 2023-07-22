import { Navigation } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthContextProvider } from './src/store/auth-store';
import 'react-native-gesture-handler';
import { useContext, useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { getStorageData } from './src/utils/storage';

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await getStorageData('token');
      if (storedToken) {
        ctx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

const App = () =>
  <AuthContextProvider>
    <Root />
  </AuthContextProvider>;


export default App;
