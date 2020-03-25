import React from "react";
import "react-native-gesture-handler";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "./constants/Colors";
import MainScreen from "./pages/Main";
import HeroScreen from "./pages/Hero";

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
      title: "Heróis"
    }
  },
  Hero: {
    screen: HeroScreen,
    navigationOptions: () => ({
      headerTitleAlign: "center",
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
