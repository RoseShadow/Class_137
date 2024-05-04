import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./screens/Details";
import HomeScreen from "./screens/Home";

const createStackNavigator= createStackNavigator(
    {
       Home: {
        screen: HomeScreen,
        navigationOption : {
            headerShown:false
        }
       },

       Details: {
        screen: DetailsScreen,

       }
    },
    {
        initialRouteName : "Home"
    }
    
);

const appSContainer = createAppContainer(createStackNavigator);
