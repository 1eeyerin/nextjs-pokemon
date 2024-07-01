import { getPokemon } from "@/api/pokemon";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Layout = async ({
  children,
  params,
}: React.PropsWithChildren<{ params: { id: string } }>) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["pokemon", params.id],
    queryFn: () => getPokemon(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default Layout;
