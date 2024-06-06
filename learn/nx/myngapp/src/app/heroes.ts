import { InjectionToken } from "@angular/core";

export interface Heroes {
    name: string;
    id: number;
    health: number;
    attack: number;
    defense: number;
    speed: number;
    magic: number;
    image: string;
    type: string;
    description: string;
}

const HEROES: Heroes[] = [ 
    
    {
        name: 'Aatrox',
        id: 1,
        health: 580,
        attack: 60,
        defense: 30,
        speed: 60,
        magic: 50,
        image: 'assets/images/Aatrox.png',
        type: 'Fighter',
        description: 'Aatrox is a legendary warrior, one of only five that remain of'
    },
    {
        name: 'Ahri',
        id: 2,
        health: 526,
        attack: 53,
        defense: 20,
        speed: 60,
        magic: 100,
        image: 'assets/images/Ahri.png',
        type: 'Mage',
        description: 'Ahri is a charismatic champion with a playful and mischievous nature.'
    },
    {
        name: 'Akali',
        id: 3,
        health: 575,
        attack: 62,
        defense: 23,
        speed: 60,  
        magic: 100,
        image: 'assets/images/Akali.png',
        type: 'Assassin',
        description: 'Akali is a champion with a high burst damage and mobility.'
    },
]
export const HeroesMockService: InjectionToken <Heroes[]>=  new InjectionToken("HEROES", {
    factory: () => HEROES,
});
