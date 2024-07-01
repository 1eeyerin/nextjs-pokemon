"use client";
import { getPokemon } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

const DetailPage = ({ params }: { params: { id: string } }) => {
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
