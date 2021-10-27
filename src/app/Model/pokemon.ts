export interface RequestPoken {
    id:                       number;
    name:                     string;
    base_experience:          number;
    height:                   number;
    is_default:               boolean;
    order:                    number;
    weight:                   number;
    abilities:                Ability[];
    forms:                    species[];
    game_indices:             GameIndex[];
    held_items:               HeldItem[];
    location_area_encounters: string;
    moves:                    Move[];
    species:                  species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
}

export interface Ability {
    is_hidden: boolean;
    slot:      number;
    ability:   species;
}

export interface species {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    species;
}

export interface HeldItem {
    item:            species;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity:  number;
    version: species;
}

export interface Move {
    move:                  species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    version_group:     species;
    move_learn_method: species;
}

export interface Sprites {
    back_female:        string;
    back_shiny_female:  string;
    back_default:       string;
    front_female:       string;
    front_shiny_female: string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    other:              Other;
    versions:           Versions;
}

export interface Other {
    dream_world:        DreamWorld;
    "official-artwork": DreamWorld;
}

export interface DreamWorld {
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: DreamWorld };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface GenerationI {
    "red-blue": DreamWorld;
    yellow:     DreamWorld;
}

export interface GenerationIi {
    crystal: DreamWorld;
    gold:    DreamWorld;
    silver:  DreamWorld;
}

export interface GenerationIii {
    emerald:             DreamWorld;
    "firered-leafgreen": DreamWorld;
    "ruby-sapphire":     DreamWorld;
}

export interface GenerationIv {
    "diamond-pearl":        DreamWorld;
    "heartgold-soulsilver": DreamWorld;
    platinum:               DreamWorld;
}

export interface GenerationV {
    "black-white": DreamWorld;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": DreamWorld;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      species;
}

export interface Type {
    slot: number;
    type: species;
}
