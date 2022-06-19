import { Image, Text, View, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../../assets/images/doc1.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../../assets/images/doc2.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../../assets/images/doc3.png"),
    backgroundColor: "#22bcb5",
  },
];

const OnBoard = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      showSkipButton
      onDone={() => navigation.navigate("main")}
    />
  );
};

export default OnBoard;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  title: {},
  image: {
    position: "absolute",
    bottom: "20%",
    height: "50%",
    width: "100%",
  },
  text: {},
});
