import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Department from "../../components/Department";
import axios from "axios";
import MoviePoster from "../../components/MoviePoster";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../../redux/actions";

const data = [
  {
    id: 1,
    title: "Pediatrics",
    icon: <MaterialIcons name="child-care" size={40} color="black" />,
  },
  {
    id: 2,
    title: "Dental",
    icon: <FontAwesome5 name="tooth" size={40} color="black" />,
  },
  {
    id: 3,
    title: "Lungs",
    icon: <FontAwesome5 name="lungs" size={40} color="black" />,
  },
  {
    id: 4,
    title: "Heart",
    icon: <FontAwesome name="heartbeat" size={40} color="black" />,
  },
];

export default () => {
  const [departments, setDepartments] = useState([]);
  // const [pop_movies, setPopMovies] = useState([]);
  const [is_loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { pop_movies } = useSelector((state) => state.Movies);

  useEffect(() => {
    setDepartments(data);
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginLeft: 10, marginVertical: 10 }}>Departments</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        {departments?.map((department, index) => {
          return (
            <Department
              key={department.id}
              title={department.title}
              icon={department.icon}
            />
          );
        })}
      </ScrollView>

      <Text style={{ marginLeft: 10, marginVertical: 10 }}>Popular Movies</Text>
      {is_loading && <ActivityIndicator size="small" color="#000" />}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        {pop_movies?.map((movie, index) => {
          return (
            <MoviePoster
              key={index}
              title={movie.title}
              imageUrl={movie.poster_path}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
