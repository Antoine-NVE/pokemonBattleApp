import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Recherche',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="magnify" size={size} color={color} />;
                    },
                }}
            />
            <Tabs.Screen name="pokemon" options={{ headerShown: false, href: null }} />
            <Tabs.Screen name="pokemon/[id]" options={{ headerShown: false, href: null }} />
        </Tabs>
    );
};

export default TabsLayout;
