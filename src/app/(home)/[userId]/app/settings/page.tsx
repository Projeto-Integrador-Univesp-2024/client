"use client";

import SettingItem from "@/components/app/setting-item";
import { SettingType } from "@/types/setting";
import { ChartArea, LogOut, Trophy, User } from "lucide-react";

interface PageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: PageProps) => {
  const currentPath = `/${params.userId}/settings`;
  const settings: SettingType.Item[] = [
    {
      title: "Detalhes da conta",
      icon: User,
      link: `${currentPath}/user`,
      active: false,
    },
    {
      title: "Recompensas",
      icon: Trophy,
      link: `${currentPath}/achievements`,
      active: false,
    },
    {
      title: "Progresso",
      icon: ChartArea,
      link: `${currentPath}/progress`,
      active: false,
    },
    {
      title: "Sair",
      icon: LogOut,
      link: "/sign-out",
      bg: "bg-red-500",
      active: true,
    },
  ];
  return (
    <main className="flex h-full w-full flex-col gap-3 rounded-t-lg bg-stone-100 px-3 py-6 text-stone-800">
      <div className="flex flex-col gap-3 pr-4 lg:pr-3">
        {settings.map((setting, index) => (
          <SettingItem key={index} {...setting} />
        ))}
      </div>
    </main>
  );
};

export default Page;
