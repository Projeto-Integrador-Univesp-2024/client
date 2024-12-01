"use client";

import AppLoading from "@/components/app/loadind";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useUserPage from "@/hooks/home/user/usePage";
import Image from "next/image";

interface PageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { userChild, isLoading } = useUserPage(params.userId);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <main className="my-24 grid h-full w-full grid-cols-2 gap-6 px-3 text-stone-800">
      <Card className="col-span-2 space-y-3 px-3 py-6 text-sky-500 shadow-none lg:col-span-1">
        <CardTitle className="text-xl font-semibold">Pontos Totais</CardTitle>
        <CardContent className="flex h-full items-center">
          <p className="mx-auto text-2xl font-black lg:text-4xl">
            P$ {userChild?.points}
          </p>
        </CardContent>
      </Card>
      <Card className="col-span-2 space-y-3 bg-[url('/img/farm.png')] bg-cover bg-center bg-no-repeat px-3 py-6 shadow-none lg:col-span-1">
        <CardTitle className="text-xl font-semibold text-stone-100">
          Fazenda
        </CardTitle>
        <CardContent className="flex h-full">
          <Badge className="mb-0 ml-0 mr-auto mt-auto bg-stone-100 text-sky-500 transition-colors hover:bg-sky-500 hover:text-stone-100">
            Atualização Em Breve
          </Badge>
        </CardContent>
      </Card>
      <Card className="space-y-3 px-3 py-6 text-stone-600 shadow-none">
        <CardTitle className="text-xl font-semibold">Instruções</CardTitle>
        <CardContent className="flex h-full">
          <Image src="/svg/instructions.svg" alt="a" width={150} height={150} />
        </CardContent>
      </Card>
      <Card className="space-y-3 px-3 py-6 text-stone-600 shadow-none">
        <CardTitle className="text-xl font-semibold">Tarefas</CardTitle>
        <CardContent className="flex h-full">
          <Image src="/svg/tasks.svg" alt="a" width={150} height={150} />
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
