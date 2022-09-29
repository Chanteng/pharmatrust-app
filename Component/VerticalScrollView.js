import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const VerticalScrollView = ({ navigation }) => {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={true}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: "#5f9ea0",
          marginTop: 20,
          width: screenWidth,
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.6 }}>
          <Image
            style={{ height: 150, marginTop: 150 }}
            source={require("../Images/logo.png")}
          />
        </View>
        <View style={{ flex: 0.3, alignItems: "center" }}>
          <Text style={{ color: "#2c187b", fontSize: 24, fontWeight: "bold" }}>
            PHARMATRUST PHARMACY &{" "}
          </Text>
          <Text style={{ color: "#2c187b", fontSize: 24, fontWeight: "bold" }}>
            PROFESSIONAL COLLEGE
          </Text>
        </View>

        <View style={{ flex: 0.3, alignItems: "center" }}>
          <LottieView
            style={{ height: 100, alignItems: "center" }}
            source={require("../Images/Slide.json")}
            autoPlay
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#9bcbe1",
          marginTop: 20,
          width: screenWidth,
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.8 }}>
          <LottieView
            style={{ height: 350, marginTop: 50 }}
            source={require("../Images/health.json")}
            autoPlay
          />
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={{ fontSize: 24, color: "white" }}>PHARMATRUST PHARMACY</Text>
        </View>
        <View style={{ flex: 0.3, alignItems: "center" }}>
          <LottieView
            style={{ height: 100, alignItems: "center" }}
            source={require("../Images/Slide.json")}
            autoPlay
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#2c187b",
          marginTop: 20,
          width: screenWidth,
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.8 }}>
          <LottieView
            style={{ height: 350, marginTop: 50 }}
            source={require("../Images/school.json")}
            autoPlay
          />
        </View>
        <View style={{ flex: 0.3 }}>
        <Text style={{ fontSize: 24, color: "white" }}>PHARMATRUST PROFESSIONAL COLLEGE</Text>
        </View>
        <View style={{ flex: 0.3, alignItems: "center" }}>
        <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
          <Text style={styles.btntxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
         
        </View>
      </View>
    </ScrollView>
  );
};

export default VerticalScrollView;

const styles = StyleSheet.create({
   btn: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingTop: 20
  },
});
