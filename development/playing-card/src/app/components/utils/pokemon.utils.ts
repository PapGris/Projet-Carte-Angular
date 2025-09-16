export enum PokemonType {
    Plante = 'Plante',
    Feu = 'Feu',
    Eau = 'Eau',
    Electrik = 'Electrik',
    Insecte = 'Insecte',
    Normal = 'Normal',
    Poison = 'Poison',
    Vol = 'Vol',
    Psy = 'Psy',
    Roche = 'Roche',
    Sol = 'Sol',
    Combat = 'Combat',
    Spectre = 'Spectre',
    Glace = 'Glace',
    Dragon = 'Dragon',
    Tenebres = 'Tenebres',
    Acier = 'Acier',
    Fée = 'Fée'
}

export interface IPokemonProprerties {
    color: string;
}

export const PokemonTypeProperties: {[key: string]: IPokemonProprerties} = {
    [PokemonType.Plante]: {
        color: 'rgba(120, 200, 80, 0.8)',
    },  
    [PokemonType.Feu]: {
        color: 'rgba(240, 128, 48, 0.8)',
    },
    [PokemonType.Eau]: {
        color: 'rgba(104, 144, 240, 0.8)',
    },
    [PokemonType.Electrik]: {   
        color: 'rgba(248, 208, 48, 0.8)',
    },
    [PokemonType.Insecte]: {
        color: 'rgba(168, 184, 32, 0.8)',
    },
    [PokemonType.Normal]: {
        color: 'rgba(168, 168, 120, 0.8)',
    },
    [PokemonType.Poison]: {
        color: 'rgba(160, 64, 160, 0.8)',
    },
    [PokemonType.Vol]: {
        color: 'rgba(168, 144, 240, 0.8)',
    },
    [PokemonType.Psy]: {
        color: 'rgba(248, 88, 136, 0.8)',
    },
    [PokemonType.Roche]: {
        color: 'rgba(184, 160, 56, 0.8)',
    },
    [PokemonType.Sol]: {
        color: 'rgba(224, 192, 104, 0.8)',
    },
    [PokemonType.Combat]: {
        color: 'rgba(192, 48, 40, 0.8)',
    },
    [PokemonType.Spectre]: {
        color: 'rgba(112, 88, 152, 0.8)',
    },
    [PokemonType.Glace]: {
        color: 'rgba(152, 216, 216, 0.8)',
    },
    [PokemonType.Dragon]: {
        color: 'rgba(112, 56, 248, 0.8)',
    },
    [PokemonType.Tenebres]: {
        color: 'rgba(112, 88, 72, 0.8)',
    },
    [PokemonType.Acier]: {
        color: 'rgba(184, 184, 208, 0.8)',
    },
    [PokemonType.Fée]: {
        color: 'rgba(238, 153, 172, 0.8)',
    }
}