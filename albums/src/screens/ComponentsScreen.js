import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

  const name = 'Peter';
  return (
    <View>
      <Text style={styles.textStyle}>This is the component of my pure work.</Text>
      <Text style={styles.subHeaderStyle}>Eho my name is slim-{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 35
  }
});

export default ComponentsScreen;
