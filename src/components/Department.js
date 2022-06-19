import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Department = (props) => {
  const { title, icon } = props;
  const handleOnPress = () => {
    alert(title);
  };
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.containerStyles}>
      {icon}
      <Text style={styles.titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Department;

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: 110,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 10,
  },
  titleStyles: {
    fontSize: 16,
    fontWeight: "600",
  },
});
