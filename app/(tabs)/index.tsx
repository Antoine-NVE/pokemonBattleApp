import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const HomePage = () => {
    const [pokemonName, setPokemonName] = useState('');

    return (
        <View className="flex items-center justify-center h-screen">
            <Text className="text-3xl font-bold text-red-600">Home Page</Text>
            <TextInput
                className="bg-white rounded-md border border-gray-200 px-10 py-3"
                placeholder="Entrez le nom du pokémon"
            />
        </View>
    );
};

export default HomePage;
