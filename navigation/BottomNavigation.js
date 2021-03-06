import { View, Text } from "react-native";
import React from "react";
import Home from "../screens/Home";
import SomeData from "../screens/SomeData";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import MovieDetails from "../screens/MovieDetails";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "list" : "list";
          } else if (route.name === "Favorites") {
            iconName = focused ? "star" : "star";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "black",
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "black",
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={SomeData} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
