import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Pokemon = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Pokemon Page {id}</Text>

            <Link href="/">Retourner à l'accueil</Link>
        </View>
    );
};

export default Pokemon;
