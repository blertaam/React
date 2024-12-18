import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = (navigation) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
      <Button title="Go to the other page" onPress={handlePress} />
      onPress={()=>navigation.navigate("Details")}
    </View>
  );
};

export default Home
