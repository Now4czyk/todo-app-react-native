import { createContext, useState } from 'react';
import { getStorageData, removeStorageData, setStorageData } from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {
  },
  logout: () => {
  },
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');

  console.log('GET STORAGE TOKEN', getStorageData('token').then(token => token));
  console.log(AsyncStorage.getItem('token'));
  const authenticate = async (token) => {
    setAuthToken(token);
    await setStorageData('token', token);
  };

  const logout = async () => {
    setAuthToken(null);
    await removeStorageData('token');
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
