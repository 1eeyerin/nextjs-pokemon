export interface PokemonListResponse {
  data: Pokemon<false>[];
  totalPages: number;
  hasNextPage: boolean;
}

export type PokemonDetailResponse = Pokemon<true>;

export interface Pokemon<IsDetail extends boolean = false> {
  sprites: SpritesImagesTypes & { other: SpritesOtherTypes } & {
    versions: SpritesVersionTypes;
  };
  abilities: {
    ability: ChipValueType<IsDetail>;
    is_hidden: boolean;
    slot: number;
  }[];
  cries: Record<"latest" | "legacy", string>;
  game_indices: {
    game_index: number;
    version: NameUrlType;
  }[];
  moves: {
    move: ChipValueType<IsDetail>;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NameUrlType;
      version_group: NameUrlType;
    }[];
  }[];
  species: NameUrlType;
  forms: NameUrlType[];
  types: {
    slot: number;
    type: ChipValueType<IsDetail>;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: NameUrlType;
  }[];
  base_experience: number;
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  weight: number;
  korean_name?: string | null;
}

type NameUrlType = { name: string; url: string };

export type ChipValueType<IsDetail extends boolean = false> = NameUrlType &
  (IsDetail extends true ? Pick<Pokemon<IsDetail>, "korean_name"> : {});

const SPRITES_IMAGE_KEYS = {
  back_default: "back_default",
  back_shiny: "back_shiny",
  front_default: "front_default",
  front_shiny: "front_shiny",
} as const;

const SPRITES_FEMALE_IMAGE_KEYS = {
  back_female: "back_female",
  back_shiny_female: "back_shiny_female",
  front_female: "front_female",
  front_shiny_female: "front_shiny_female",
} as const;

type SpritesImagesTypes = {
  [key in keyof typeof SPRITES_IMAGE_KEYS]: string;
} & {
  [key in keyof typeof SPRITES_FEMALE_IMAGE_KEYS]: string | null;
};

type SpritesOtherTypes = Record<
  "dream_world" | "home" | "official-artwork" | "showdown",
  Partial<SpritesImagesTypes>
>;

type SpritesVersionTypes = {
  [key: string]: {
    [key: string]: Partial<SpritesImagesTypes>;
  };
};
