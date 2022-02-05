import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import { useNavigation } from "@react-navigation/native";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  //base url for images
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <View style={styles.row}>
      <Text style={styles.row__text}>{title}</Text>
      <ScrollView horizontal={true}>
        {movies.map((movie) => {
          let url = !isLargeRow ? movie.backdrop_path : movie.poster_path;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("movieDetails", { movie: movie })
              }
              key={movie.id}
              style={styles.row__scroll}
            >
              <Image
                source={{ uri: imageUrl + url }}
                style={styles.row__image}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row__text: {
    color: "white",
    marginLeft: "5%",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  row__image: {
    width: 150,
    height: 220,
  },
  row__scroll: {
    padding: 5,
  },
});
