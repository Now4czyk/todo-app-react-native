import AsyncStorage from "@react-native-async-storage/async-storage";

interface GetStorageDataProps {
  id: string;
  onSuccess?: (value: string | null) => void;
}

export const getStorageData = async ({
  id,
  onSuccess,
}: GetStorageDataProps) => {
  try {
    const value = await AsyncStorage.getItem(id);
    if (value !== null) {
      onSuccess?.(value);
    }
    console.log(`Storage field ${id} read successfully`, value);
  } catch (e) {
    console.log(`Error occurred while reading storage field ${id}`, e);
  }
};
export const setStorageData = async ({
  id,
  value,
}: GetStorageDataProps & { value: string }) => {
  try {
    await AsyncStorage.setItem(id, value);
    console.log(`Storage field ${id} set successfully`, value);
  } catch (e) {
    console.log(`Error occurred while setting storage field ${id}`, e);
  }
};
