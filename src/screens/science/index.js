import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
export default () => {
  const { pop_movies } = useSelector((state) => state.Movies);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {pop_movies?.map((movie, index) => {
        return <Text key={index}>{movie.title}</Text>;
      })}
    </View>
  );
};
