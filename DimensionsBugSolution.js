The solution is to use the `Dimensions` API's event listener to track changes: 

```javascript
import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width, height });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setScreenDimensions({ width: window.width, height: window.height });
    });
    return () => subscription?.remove(); // Clean up the listener
  }, []);

  console.log('Width:', screenDimensions.width);
  console.log('Height:', screenDimensions.height);
  return (
    <View style={[styles.container, { width: screenDimensions.width, height: screenDimensions.height }]}/>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  }
});

export default MyComponent;
```