import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Dimensions,
} from "react-native";
//import movieTrailer from "movie-trailer";
const movieTrailer = require("movie-trailer");
import React, { useState, useCallback, useEffect } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
const MovieDetails = ({ route }) => {
  const { movie } = route.params;
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [playing, setPlaying] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState([]);

  //truncate the description to fit the banner

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    if (movie) {
      movieTrailer(
        movie?.title || movie?.original_name || movie?.original_title || ""
      )
        .then((url) => {
          // const urlParams = new URLSearchParams(new URL(url).search);
          let regExp =
            /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;

          setTrailerUrl(url.match(regExp));
        })
        .catch((err) => console.log(err));
    } else {
      setTrailerUrl("");
    }
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.movieDetail}>
      <ImageBackground
        source={{ uri: imageUrl + movie?.backdrop_path }}
        resizeMode="cover"
        style={styles.movieDetail__background}
      ></ImageBackground>
      <View style={styles.movieDetail__imageContainer}>
        <Image
          style={styles.movieDetail__image}
          source={{
            uri: imageUrl + movie?.poster_path,
          }}
        />
        <View style={styles.movieDetail__details}>
          <Text style={styles.movieDetail__title}>
            {movie?.name || movie?.title || movie?.original_name}
          </Text>
          <Text style={styles.movieDetail__title}>
            {truncate(movie?.overview || movie?.description, 100)}
          </Text>
        </View>
      </View>
      <View style={styles.movieDetail__button}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={trailerUrl[1]}
          onChangeState={onStateChange}
        />
        <Button
          color="red"
          title={playing ? "pause" : "play"}
          onPress={togglePlaying}
        />
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  movieDetail: {
    flex: 1,
    backgroundColor: "black",
  },
  movieDetail__background: {
    width: "100%",
    height: 250,
    zIndex: -1,
  },
  movieDetail__image: {
    width: 120,
    height: 200,
  },
  movieDetail__imageContainer: {
    position: "absolute",
    top: 150,
    left: "10%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  movieDetail__title: {
    color: "white",
    width: "30%",
    overflow: "hidden",
    padding: 15,
  },
  movieDetail__button: {
    position: "absolute",
    width: "100%",
    bottom: "10%",
    left: "50%",
    transform: [{ translateX: -Dimensions.get("window").width / 2 }],
  },
});
