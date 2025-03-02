import React from 'react';
import { Button, Text, View } from 'react-native';

const InnerComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Praful Mobile App Developer</Text>
      <Text style={{ fontSize: 30 }}>Flutter Mobile App Developer</Text>
      <Button title="Press Here" onPress={() => alert('Button Pressed')} />
    </View>
  );
};

export default InnerComponent;