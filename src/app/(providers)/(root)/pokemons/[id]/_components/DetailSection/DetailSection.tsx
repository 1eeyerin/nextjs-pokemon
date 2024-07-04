"use client";

import type { ChipValueType } from "@/types/pokemon";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type DetailSectionProps = {
  title: ChipValueType<true>["name"];
};

const DetailSection = ({
  title,
  children,
}: PropsWithChildren<DetailSectionProps>) => (
  <div className="mb-6 text-lg text-gray-800">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <span className="font-semibold">{title}:</span>
    </motion.div>
    <div className="flex flex-wrap gap-x-2 gap-y-4 mt-2">{children}</div>
  </div>
);

export default DetailSection;
