import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Education from "./Screens/Education";
import Location from "./Screens/Location";
import About from "./Screens/About";
import GetStarted from "./Screens/GetStarted";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "red",
      headerShown: false
    
    }}
  >
    <Tab.Screen 
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Location}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="search" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Education"
      component={Education}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="newspaper-o" size={24} color="black" />
        ),
      }}
    />

<Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="user" size={24} color="black" />
        ),
      }}
    />
     
  </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={GetStarted}
            screenOptions={{headerShown: false}} >
      <Stack.Screen name="GetStarted" component={GetStarted}  />
        {/* <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Location" component={Location} /> */}
        {/* <Stack.Screen name="Business" component={Business} />
        <Stack.Screen name="Entertainment" component={Entertainment} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Science" component={Science} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
