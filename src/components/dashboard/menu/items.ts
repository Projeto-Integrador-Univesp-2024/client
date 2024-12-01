import { BookOpenCheck, Goal, Home, ListTodo, ShoppingCart, User } from "lucide-react";

export const DashboardMenuItems = (userId: string) => {
  const path = `/${userId}/dashboard`;

  return [
    {
      title: "Início",
      icon: Home,
      href: path,
    },
    {
      title: "Crianças",
      icon: User,
      href: path + "/childs",
    },
    {
      title: "Tipos de Tarefas",
      icon: BookOpenCheck,
      href: path + "/task-types",
    },
    {
      title: "Tarefas",
      icon: ListTodo,
      href: path + "/tasks",
    },
    {
      title: "Objetivos",
      icon: Goal,
      href: path + "/goals",
    },
    {
      title: "Produtos",
      icon: ShoppingCart,
      href: path + "/products",
    },
  ];
};
