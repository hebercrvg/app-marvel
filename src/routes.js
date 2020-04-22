import React from "react";
import "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "./constants/Colors";
import MainScreen from "./pages/Main";
import HeroScreen from "./pages/Hero";
import ComicScreen from "./pages/Comic";

const RootStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: "#FFF",
      title: "Heroes"
    }
  },
  Hero: {
    screen: HeroScreen,
    navigationOptions: () => ({
      headerTitleAlign: "left",
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: "#FFF"
    })
  },
  Comic: {
    screen: ComicScreen,
    navigationOptions: () => ({
      headerTitleAlign: "left",
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: "#FFF"
    })
  }
});

const Routes = createAppContainer(RootStack);

export default Routes;
