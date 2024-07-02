import { getPokemon } from "@/api/pokemon";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await getPokemon(id);

  return {
    title: `${response.korean_name}의 페이지`,
    description: `${response.korean_name}의 상세 페이지`,
    keywords: "next.js, SSG, Meta 데이터, Pokemon",
  };
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await getPokemon(id);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10">
        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg">
          <div className="text-3xl font-extrabold text-gray-900 mb-14 text-center transition-colors duration-500 hover:text-indigo-600 hover:cursor-pointer">
            {response.korean_name}
          </div>
          <Image
            src={response.sprites.front_default}
            alt={response.korean_name}
            width={120}
            height={120}
            className="mb-8 mx-auto rounded-full shadow-2xl border border-gray-100 animate-bounce p-4"
          />
          <div className="mb-6 text-lg text-gray-800 transition-colors duration-500 hover:text-indigo-600 hover:cursor-pointer flex">
            <span className="font-semibold">키: </span> {response.height}m
            <span className="font-semibold ml-4">무게: </span> {response.weight}
            kg
          </div>
          <div className="mb-6 text-lg text-gray-800 transition-colors duration-500 hover:text-indigo-600 hover:cursor-pointer">
            <span className="font-semibold">타입:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {response.types.map(({ type }: any) => (
                <span
                  key={type.id}
                  className="bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 px-3 py-1 rounded-full shadow-md transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
                >
                  {type.korean_name}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6 text-lg text-gray-800 transition-colors duration-500 hover:text-indigo-600 hover:cursor-pointer">
            <span className="font-semibold">특성:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {response.abilities.map(({ ability }: any) => (
                <span
                  key={ability.id}
                  className="bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 px-3 py-1 rounded-full shadow-md transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
                >
                  {ability.korean_name}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6 text-lg text-gray-800 transition-colors duration-500 hover:text-indigo-600 hover:cursor-pointer">
            <span className="font-semibold">기술:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {response.moves.map(({ move }: any) => (
                <span
                  key={move.id}
                  className="bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 px-3 py-1 rounded-full shadow-md transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
                >
                  {move.korean_name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
