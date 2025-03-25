import { createContext, useState, ReactNode } from 'react';

export const ProfileContext = createContext<{ wallet: number; caught_pokemons: any[] }>({
    wallet: 1000,
    caught_pokemons: [],
});

export const ProfileContextProvider = ({ children }: { children: ReactNode }) => {
    const [profile, setProfile] = useState<{ wallet: number; caught_pokemons: any[] }>({
        wallet: 1000,
        caught_pokemons: [],
    });

    return <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>;
};
