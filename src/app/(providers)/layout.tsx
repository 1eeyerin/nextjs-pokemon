import QueryProvider from "@/providers/QueryProvider";
import type { PropsWithChildren } from "react";

const ProvidersLayout = ({ children }: PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default ProvidersLayout;
