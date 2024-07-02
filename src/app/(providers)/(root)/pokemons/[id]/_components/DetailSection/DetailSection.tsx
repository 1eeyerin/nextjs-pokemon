import Chip from "@/components/Chip";

interface DetailSectionProps {
  title: string;
  items: { id: string; name: string }[];
}

const DetailSection = ({ title, items }: DetailSectionProps) => (
  <div className="mb-6 text-lg text-gray-800">
    <span className="font-semibold">{title}:</span>
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <Chip key={item.id}>{item.name}</Chip>
      ))}
    </div>
  </div>
);

export default DetailSection;
