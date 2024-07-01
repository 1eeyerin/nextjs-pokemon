import { getPokemon } from "@/api/pokemon";
import {
  QueryClient,
  dehydrate,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const queryClient = new QueryClient();
//   const id = context.params?.id as string;

//   await queryClient.prefetchQuery({
//     queryKey: ["pokemon", id],
//     queryFn: () => getPokemon(id),
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       params: { id },
//     },
//   };
// };

// Next.js 페이지 라우터 예시

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["pokemon", 3],
    queryFn: () => getPokemon("3"),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DetailPage = ({ params, ...props }: { params: { id: string } }) => {
  console.log(props);

  const { id } = params;
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <div>
      <div>포켓몬 상세 {id}</div>
    </div>
  );
};

export default DetailPage;
