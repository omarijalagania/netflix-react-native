import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const netflixLogo = require("../../assets/netflix.jpeg");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={netflixLogo} style={styles.header__image} />
      <Text>Header</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header__image: {
    resizeMode: "cover",
    height: 50,
    width: "100%",
    alignItems: "center",
  },
  header: {
    marginTop: 30,
  },
});
