import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const MoviePoster = (props) => {
  const { imageUrl, title } = props;
  const handleOnPress = () => {
    alert(title);
  };
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.containerStyles}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` }}
        style={styles.imageStyles}
      />
      <Text style={styles.titleStyles} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: "column",
    width: 130,
    borderRadius: 10,
    marginLeft: 10,
  },
  titleStyles: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 10,
  },

  imageStyles: {
    flex: 1,
    height: 120,
    width: "100%",
    borderRadius: 10,
  },
});
