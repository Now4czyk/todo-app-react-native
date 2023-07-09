import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorageData = async (id: string) => {
  try {
    const value = await AsyncStorage.getItem(id);
    // console.log(`Storage field ${id} read successfully`, value);
    return value;
  } catch (e) {
    console.log(`Error occurred while reading storage field ${id}`, e);
  }
};

export const setStorageData = async (id: string, value: string) => {
  try {
    await AsyncStorage.setItem(id, value);
    console.log(`Storage field ${id} set successfully`, value);
  } catch (e) {
    console.log(`Error occurred while setting storage field ${id}`, e);
  }
};

export const removeStorageData = async (id: string) => {
  try {
    await AsyncStorage.removeItem(id);
    console.log(`Storage field ${id} removed successfully`);
  } catch (e) {
    console.log(`Error occurred while removing storage field ${id}`, e);
  }
};
