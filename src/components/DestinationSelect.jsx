import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";

const DestinationSelect = ({ value, onChange }) => {
  const bantul = [
    "Parangtritis Beach",
    "Kalibiru National Park",
    "Pantai Baron",
    "Pantai Kukup",
    "Pantai Indrayanti",
    "Grojogan Sewu Waterfall",
  ];

  const sleman = [
    "Prambanan Temple",
    "Merapi Volcano",
    "Ullen Sentalu Museum",
    "Kaliurang",
    "Museum Merapi",
    "Kraton Ngayogyakarta Hadiningrat",
  ];

  const kulonprogo = [
    "Punthuk Setumbu",
    "Kedung Pedut Waterfall",
    "Puncak Kebun Buah Mangunan",
    "Pantai Glagah",
    "Pantai Drini",
  ];

  const yogyakarta = [
    "Taman Sari",
    "Malioboro",
    "Prambanan Temple",
    "Merapi Volcano",
    "Kotagede",
  ];

  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] text-sm border-0">
        <SelectValue placeholder="Select destination" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Bantul Regency</SelectLabel>
          {/* All */}
          <SelectItem value="all-bantul">All Bantul</SelectItem>
          {bantul.map((destination, index) => (
            <SelectItem
              key={index}
              value={destination.toLowerCase().split(" ").join("-")}
            >
              {destination}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Sleman Regency</SelectLabel>
          {/* All */}
          <SelectItem value="all-sleman">All Sleman</SelectItem>
          {sleman.map((destination, index) => (
            <SelectItem
              key={index}
              value={destination.toLowerCase().split(" ").join("-")}
            >
              {destination}
            </SelectItem>
          ))}
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Kulon Progo Regency</SelectLabel>
          {/* All */}
          <SelectItem value="all-kulon-progo">All Kulon Progo</SelectItem>
          {kulonprogo.map((destination, index) => (
            <SelectItem
              key={index}
              value={destination.toLowerCase().split(" ").join("-")}
            >
              {destination}
            </SelectItem>
          ))}
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Yogyakarta Regency</SelectLabel>
          {/* All */}
          <SelectItem value="all-yogyakarta">All Yogyakarta</SelectItem>
          {yogyakarta.map((destination, index) => (
            <SelectItem
              key={index}
              value={destination.toLowerCase().split(" ").join("-")}
            >
              {destination}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DestinationSelect;
