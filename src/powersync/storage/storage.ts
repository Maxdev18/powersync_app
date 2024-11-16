import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
export const storeData = async (key: string, value: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('AsyncStorage error:', error);
  }
};

// Retrieve data
export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error('AsyncStorage error:', error);
  }
};

export const updateKey = async (key: string, newValue: object) => {
  try {
    // 1. Retrieve the existing data (if any)
    const existingValue = await AsyncStorage.getItem(key);

    // 2. Update the value
    let updatedValue;
    if (existingValue !== null) {
      // If the key exists, parse the existing value (if it's an object)
      const parsedValue = JSON.parse(existingValue);

      // Update the object as needed
      // Example:
      updatedValue = { ...parsedValue, ...newValue }; 
    } else {
      // If the key doesn't exist, simply use the new value
      updatedValue = newValue;
    }

    // 3. Store the updated value
    await AsyncStorage.setItem(key, JSON.stringify(updatedValue));

    console.log('Value updated successfully');
  } catch (error) {
    console.error('Error updating value:', error);
  }
};

export const deleteKey = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Key removed successfully:', key);
  } catch (error) {
    console.error('Error removing key:', error);
  }
};