import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";

const TourTypeSelect = ({ value, onChange }) => {
  const tourTypes = [
    "Cultural Tour",
    "Adventure Tour",
    "Culinary Tour",
    "Nature Tour",
    "Night Tour",
    "Walking Tour",
    "Cycling Tour",
    "Heritage Tour",
    "Village Tour",
    "Custom Tour",
  ];
  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] text-sm border-0">
        <SelectValue placeholder="Select tour type" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="all-tour-types">All Tour Types</SelectItem>
        {tourTypes.map((tourType, index) => (
          <SelectItem
            key={index}
            value={tourType.toLowerCase().split(" ").join("-")}
          >
            {tourType}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TourTypeSelect;
