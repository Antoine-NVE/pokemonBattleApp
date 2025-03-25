import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Pokemon = () => {
    return (
        <View>
            <Text>Pokemon Page</Text>

            <Link href="/">Retourner à l'accueil</Link>
        </View>
    );
};

export default Pokemon;
