import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableWithoutFeedback, Touchable, Text } from "react-native";
import FastImage from "react-native-fast-image";

import { getImageUrl } from "../api/url";
import { gray } from "../helper/Color";

const MoviePoster = ({ item, navigation, height, width, type }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (type === "tv") {
          navigation.navigate("TVDetail", { id: item.id });
        } else {
          navigation.navigate("MovieDetail", { id: item.id });
        }
      }}
    >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <FastImage style={{ height, width }} resizeMode="cover" source={getImageUrl(item.poster_path)} />
          </View>
          <View style={styles.votedContainer}>
            <Text style={styles.text}>
              {item.vote_average}
            </Text> 
          </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

export default MoviePoster;

MoviePoster.propTypes = {
  item: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
  navigation: PropTypes.any,
  type: PropTypes.oneOf(["tv", "movie"]),
};

MoviePoster.defaultProps = {
  height: 180,
  width: 120,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 5
  },
  imageContainer: {
    margin: 4,
    backgroundColor: gray,
    borderRadius: 12,
    overflow: "hidden",
    
  },
  votedContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -3,
    right: 2,
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor:'red'
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12
  }
});
