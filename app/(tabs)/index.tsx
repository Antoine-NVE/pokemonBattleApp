import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const HomePage = () => {
    return (
        <View>
            <Text>Home Page</Text>

            <Link href="/pokemon">Page pokémon</Link>
        </View>
    );
};

export default HomePage;
