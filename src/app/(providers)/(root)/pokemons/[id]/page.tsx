import { getPokemon } from "@/api/pokemon";
import Image from "next/image";
import DetailSection from "./_components/DetailSection";
import HistoryBackBtn from "./_components/HistoryBackBtn";
import AudioPlayer from "./_components/AudioPlayer";

type ParamsProps = {
  params: { id: string };
};

export const generateMetadata = async ({ params }: ParamsProps) => {
  const { id } = params;
  const response = await getPokemon(id);

  return {
    title: `🎀 포켓몬 도감: ${response.korean_name || ""}`,
    description: `${response.korean_name || ""} 정보`,
    keywords: "포켓몬, 포켓몬 도감, 포켓몬 정보",
  };
};

const DetailPage = async ({ params }: ParamsProps) => {
  const { id } = params;
  const response = await getPokemon(id);

  return (
    <>
      <HistoryBackBtn />
      <AudioPlayer src={response.cries.latest} />
      <div className="text-3xl font-extrabold text-gray-900 mb-14 text-center">
        {response.korean_name}
      </div>
      <Image
        src={response.sprites.front_default}
        alt={response.korean_name || ""}
        width={120}
        height={120}
        className="mb-8 mx-auto rounded-full shadow-2xl border border-gray-100 animate-bounce p-4"
      />
      <div className="mb-6 text-lg text-gray-800 flex">
        <span className="font-semibold">키: </span> {response.height}m
        <span className="font-semibold ml-4">무게: </span> {response.weight}
        kg
      </div>
      <DetailSection
        title="타입"
        items={response.types.map(({ type }) => ({
          id: type.name,
          name: type.korean_name,
        }))}
      />
      <DetailSection
        title="특성"
        items={response.abilities.map(({ ability }) => ({
          id: ability.name,
          name: ability.korean_name,
        }))}
      />
      <DetailSection
        title="기술"
        items={response.moves.map(({ move }) => ({
          id: move.name,
          name: move.korean_name,
        }))}
      />
    </>
  );
};

export default DetailPage;
