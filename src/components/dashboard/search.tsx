import { Search } from "lucide-react";
import { Input } from "../ui/input";

const DashboardSearch = () => {
  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-800" />
      <Input
        type="search"
        placeholder="Buscar..."
        className="w-full rounded-lg bg-stone-100 pl-8 text-stone-800 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );
};

export default DashboardSearch;
