import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Manga/MangaSearch";
import Details from "../screens/Manga/MangaDetails";

const Stack = createStackNavigator();

function homeStack() {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade,
            }}
        >
            <Stack.Screen name="Manga Search" component={Search} />
            <Stack.Screen name="Manga Details" component={Details} />
        </Stack.Navigator>
    );
}

export default homeStack;
