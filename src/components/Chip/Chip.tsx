import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";

const badgeStyles = cva(
  "bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 px-3 py-1 rounded-full shadow-md transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
);

interface BadgeProps extends ComponentProps<"span"> {}

const Chip = ({ children, ...props }: BadgeProps) => {
  return (
    <span className={badgeStyles()} {...props}>
      {children}
    </span>
  );
};

export default Chip;
