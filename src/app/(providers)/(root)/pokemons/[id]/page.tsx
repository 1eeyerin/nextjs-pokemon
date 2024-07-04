import { getPokemon } from "@/api/pokemon";
import Image from "next/image";
import HistoryBackBtn from "./_components/HistoryBackBtn";
import AudioPlayer from "./_components/AudioPlayer";
import DetailContents from "./_components/DetailContents";

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
      <DetailContents response={response} />
    </>
  );
};

export default DetailPage;
