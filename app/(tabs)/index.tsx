import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

const HomePage = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [results, setResults] = useState(null);

    const handleSearch = useCallback(() => {
        
    }, [pokemonName]);

    return (
        <View className="flex items-center justify-center h-screen">
            <Text className="text-3xl font-bold text-red-600">Home Page</Text>
            <TextInput
                className="bg-white rounded-md border border-gray-200 px-10 py-3"
                placeholder="Entrez le nom du pokémon"
                onChangeText={setPokemonName}
            />
            <Pressable className="bg-red-600 px-10 py-3 rounded-md mt-5">
                <Text className="text-white fond-bold">Rechercher</Text>
            </Pressable>
        </View>
    );
};

export default HomePage;
