import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Header from "../components/Header/Header";
import Row from "../components/Row/Row";
import requests from "../helper/urls";
const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.home}>
      <StatusBar style="auto" />
      <Header />
      <ScrollView>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row
          title="Documentary Movies"
          fetchUrl={requests.fetchDocumentaries}
        />
      </ScrollView>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Row} />
        <Tab.Screen name="Settings" component={Header} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "black",
  },
});
