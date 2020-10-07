import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MangaList from "../screens/Manga/MangaList";
import MangaDetails from "../screens/Manga/MangaDetails";

const Stack = createStackNavigator();

const MangaListStack = () => {
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
            <Stack.Screen name="Manga List" component={MangaList} />
            <Stack.Screen name="Manga Details" component={MangaDetails} />
        </Stack.Navigator>
    );
};

export default MangaListStack;
