import React, { useState, useEffect } from "react";

/**
 * @author
 * @function Debounce
 **/

const Debounce = (value, delay) => {
  console.log(value);
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default Debounce;
