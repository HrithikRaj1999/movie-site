import React, { useEffect, useState } from "react";
// Define a custom React hook called useLocalStorage, which is generic and takes two parameters:
// 'key' for the localStorage key and 'initialValue' for the initial state value.
function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Initialize a state variable 'value' and its corresponding 'setValue' function
  // using the useState hook. The initial state is computed by a callback function.
  const [value, setValue] = useState<T>(() => {
    // Inside the callback function:
    // 1. Attempt to retrieve a value from localStorage using the provided 'key'.
    const jsonValue = localStorage.getItem(key);

    // 3. If a value is found in localStorage, parse it from JSON format.
    if (jsonValue !== null && jsonValue !== "undefined")
      return JSON.parse(jsonValue);

    // 4. If no value is found in localStorage, check whether 'initialValue' is a function.
    if (typeof initialValue === "function") {
      // 5. If 'initialValue' is a function, call it to generate the initial value.
      return (initialValue as () => T)();
    } else {
      // 6. If 'initialValue' is not a function, use it directly as the initial value.
      return initialValue;
    }
  });

  // Use the useEffect hook to set a new value in localStorage whenever 'key' or 'value' changes.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return an array containing the current 'value' and 'setValue' function
  // with TypeScript type annotations [typeof value, typeof setValue].
  return [value, setValue] as [typeof value, typeof setValue];
}

export default useLocalStorage;
