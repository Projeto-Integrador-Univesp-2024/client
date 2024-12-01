import { Cog, Home, ListTodo } from "lucide-react";

interface MenuItemsProps {
  userId: string;
}

export const MenuItems = ({ userId }: MenuItemsProps) => {
  const items = [
    {
      title: "Início",
      link: `/${userId}/app`,
      icon: Home,
      bg: "bg-stone-100",
      text: "text-stone-600",
    },
    {
      title: "Tarefas",
      link: `/${userId}/app/tasks`,
      icon: ListTodo,
      bg: "bg-[url('/img/bg-farm.jpg')] bg-cover bg-center bg-no-repeat",
      text: "text-stone-100",
    },
    {
      title: "Configurações",
      link: `/${userId}/app/settings`,
      icon: Cog,
      bg: "bg-[url('/img/settings.jpg')] bg-cover bg-center bg-no-repeat",
      text: "text-stone-100",
    },
  ];

  return items;
};
