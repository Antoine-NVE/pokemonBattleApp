import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { fetch } from 'expo/fetch';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

const HomePage = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [results, setResults] = useState<{ id: number; name: string; image: string } | null>(null);

    const handleSearch = useCallback(async () => {
        if (!pokemonName) return;

        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/' + pokemonName.toLowerCase(), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) return;

        const pokemon = await response.json();
        setResults(pokemon);
    }, [pokemonName]);

    return (
        <View className="flex items-center justify-center h-screen">
            <Text className="text-3xl font-bold text-red-600">Home Page</Text>
            <TextInput
                className="bg-white rounded-md border border-gray-200 px-10 py-3"
                placeholder="Entrez le nom du pokémon"
                onChangeText={setPokemonName}
            />
            <Pressable onPress={handleSearch} className="bg-red-600 px-10 py-3 rounded-md mt-5">
                <Text className="text-white fond-bold">Rechercher</Text>
            </Pressable>
            {results && (
                <View>
                    <Image source={{ uri: results.image }} style={{ width: 100, height: 100 }} />
                    <Text className="text-2xl font-bold">
                        {results.name} {results.id}
                    </Text>
                    <Link href={`/(tabs)/pokemon/${results?.id}`}>Voir la fiche</Link>
                </View>
            )}
        </View>
    );
};

export default HomePage;
