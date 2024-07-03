"use client";
import { useRouter } from "next/navigation";
import ArrowLeft from "/public/icons/arrow-left.svg";

const HistoryBackBtn = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="sticky top-0 left-0 bg-white rounded-full p-2 w-12 shadow-lg z-10"
    >
      <ArrowLeft />
    </button>
  );
};

export default HistoryBackBtn;
