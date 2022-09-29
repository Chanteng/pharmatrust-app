import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "../Component/Carousel";
import LottieView from "lottie-react-native";

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={{ flex: 0.2 }}>
        <Image
          style={{ height: 80, marginTop: 50, alignSelf: "center" }}
          source={require("../Images/logo.png")}
        />
      </View>
      <View style={{ flex: 0.1 }}>
        <Text
          style={{
            color: "#2c187b",
            fontSize: 24,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Welcome to Pharmatrust Limited
        </Text>
      </View>
      <View style={{ flex: 0.3 }}>
        <Carousel />
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#2c187b",
        }}
      >
        <TouchableOpacity  onPress={() => navigation.navigate("Order")}>
          <LottieView
            style={{ height: 150, alignItems: "center" }}
            source={require("../Images/order.json")}
            autoPlay
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("Education")}>
          <LottieView
            style={{ height: 150, alignItems: "center" }}
            source={require("../Images/edu.json")}
            autoPlay
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#2c187b",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Location")}>
          <LottieView
            style={{ height: 150, alignItems: "center" }}
            source={require("../Images/loc.json")}
            autoPlay
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("Contact")}>
          <LottieView
            style={{ height: 150, alignItems: "center" }}
            source={require("../Images/contact.json")}
            autoPlay
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
