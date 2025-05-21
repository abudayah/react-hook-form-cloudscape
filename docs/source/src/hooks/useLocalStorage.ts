import { useState, useCallback } from "react";

// Hook for local storage management
export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: any) => {
      try {
        // Save state
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        // Save to local storage
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.error(error);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue];
};
