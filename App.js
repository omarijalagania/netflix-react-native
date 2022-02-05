import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BottomNavigation from "./navigation/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import MovieDetails from "./screens/MovieDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Nav"
            component={BottomNavigation}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="movieDetails"
            component={MovieDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
