import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardHomeEmptyPage = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-2">
      <h1 className="text-center text-xl font-bold text-stone-800 md:text-3xl">
        Você não possui nenhuma criança cadastrada!
      </h1>
      <Button asChild>
        <Link href={`dashboard/childs`}>Cadastrar criança</Link>
      </Button>
    </div>
  );
};

export default DashboardHomeEmptyPage;
