"use client";

import type { PokemonDetailResponse } from "@/types/pokemon";
import { motion } from "framer-motion";
import DetailSection from "../DetailSection";
import Chip from "@/components/Chip";

const ANIMATION_SETTINGS = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

type DetailContentsProps = {
  response: PokemonDetailResponse;
};
const DetailContents = ({ response }: DetailContentsProps) => {
  return (
    <>
      <DetailSection title="세부 사항">
        <motion.div transition={{ delay: 0.2 }} {...ANIMATION_SETTINGS}>
          <div className="text-lg text-gray-800 flex">
            <span className="font-semibold">키: </span> {response.height}m
            <span className="font-semibold ml-4">무게: </span> {response.weight}
            kg
          </div>
        </motion.div>
      </DetailSection>
      <DetailSection title="타입">
        {response.types.map(({ type }, index) => (
          <motion.div
            key={type.name}
            transition={{ delay: index * 0.1 }}
            {...ANIMATION_SETTINGS}
          >
            <Chip>{type.korean_name}</Chip>
          </motion.div>
        ))}
      </DetailSection>
      <DetailSection title="특성">
        {response.abilities.map(({ ability }, index) => (
          <motion.div
            key={ability.name}
            transition={{ delay: index * 0.1 }}
            {...ANIMATION_SETTINGS}
          >
            <Chip>{ability.korean_name}</Chip>
          </motion.div>
        ))}
      </DetailSection>
      <DetailSection title="기술">
        {response.moves.map(({ move }, index) => (
          <motion.div
            key={move.name}
            transition={{ delay: index * 0.1 }}
            {...ANIMATION_SETTINGS}
          >
            <Chip>{move.korean_name}</Chip>
          </motion.div>
        ))}
      </DetailSection>
    </>
  );
};

export default DetailContents;
