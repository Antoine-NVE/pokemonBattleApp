import { createContext, useState, ReactNode } from 'react';

export enum ChestRarity {
    COMMON = 'common',
    UNCOMMON = 'uncommon',
    RARE = 'rare',
    EPIC = 'epic',
    LEGENDARY = 'legendary',
}

export type Chest = {
    price: number;
    rarity: ChestRarity;
};

export const chestImages: Record<ChestRarity, any> = {
    [ChestRarity.COMMON]: require('../../assets/images/chest_common.jpg'),
    [ChestRarity.UNCOMMON]: require('../../assets/images/chest_uncommon.jpg'),
    [ChestRarity.RARE]: require('../../assets/images/chest_rare.jpg'),
    [ChestRarity.EPIC]: require('../../assets/images/chest_epic.jpg'),
    [ChestRarity.LEGENDARY]: require('../../assets/images/chest_legendary.jpg'),
};

export const ProfileContext = createContext<{
    wallet: number;
    chests: any[];
    caught_pokemons: any[];
    add_money: (money: number) => void;
    substract_money: (money: number) => void;
}>({
    wallet: 1000,
    chests: [],
    caught_pokemons: [],
    add_money: (money: number) => {},
    substract_money: (money: number) => {},
});

export const ProfileContextProvider = ({ children }: { children: ReactNode }) => {
    const [wallet, setWallet] = useState(1000);
    const [caught_pokemons, setCaughtPokemons] = useState([]);
    const [chests, setChests] = useState([]);

    const add_money = (money: number) => {
        setWallet(wallet + money);
    };

    const substract_money = (money: number) => {
        setWallet(wallet - money);
    };

    return (
        <ProfileContext.Provider
            value={{
                wallet,
                chests,
                caught_pokemons,
                add_money,
                substract_money,
            }}>
            {children}
        </ProfileContext.Provider>
    );
};
