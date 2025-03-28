import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

const Pokemon = () => {
    const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState<{
        name: string;
        image: string;
        apiPreEvolution: { name: string; pokedexIdd: number };
        apiEvolutions: { name: string; pokedexId: number }[];
    } | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setPokemon(await response.json());
        };

        fetchPokemon();
    }, [id]);

    return (
        <View className="flex flex-col items-center mt-20">
            <View className="bg-white rounded-full p-10 flex items-center justify-center">
                <Image source={{ uri: pokemon?.image }} style={{ width: 100, height: 100 }} />
            </View>
            <Text className="text-3xl font-bold">{pokemon?.name}</Text>
            <View className="flex flex-row w-full">
                {pokemon?.apiPreEvolution?.pokedexIdd && (
                    <Link
                        className="rounded-lg p-5 bg-red-400 shadow-lg flex-1 text-center"
                        href={`/(tabs)/pokemon/${pokemon.apiPreEvolution.pokedexIdd}`}>
                        {pokemon.apiPreEvolution.name}
                    </Link>
                )}
                {pokemon?.apiEvolutions?.map((evolution) => (
                    <Link
                        key={evolution.pokedexId}
                        className="rounded-lg p-5 bg-green-400 shadow-lg flex-1 text-center"
                        href={`/(tabs)/pokemon/${evolution.pokedexId}`}>
                        {evolution.name}
                    </Link>
                ))}
            </View>
            <Link href="/">Retourner à l'accueil</Link>
        </View>
    );
};

export default Pokemon;
