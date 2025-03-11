import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';

const PokemonLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
        </Tabs>
    );
};

export default PokemonLayout;
