"use client";

import DashboardHeader from "@/components/dashboard/header";
import DashboardLoading from "@/components/dashboard/loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useDashboardGoals from "@/hooks/home/dashboard/goals/useDashboardGoals";
import { MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

interface DashboardGoalsPageProps {
  params: {
    userId: string;
  };
}

const DashboardGoalsPage = ({ params }: DashboardGoalsPageProps) => {
  const { goals, isLoading } = useDashboardGoals(params.userId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <main className="flex h-full w-full flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <DashboardHeader
        title="Objetivos"
        link={{
          href: "goals/new",
          children: "Adicionar Objetivo",
          icon: Plus,
        }}
      />
      <Card className="w-full">
        <CardContent>
          <Table>
            <TableCaption>
              {goals && goals.length !== 0
                ? "Todos os objetivos cadastrados."
                : "Nenhum objetivo cadastrado."}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Titulo</TableHead>
                <TableHead>Pontos</TableHead>
                <TableHead>Crianca</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {goals!.map((goal, index) => (
                <TableRow className="text-stone-800" key={index}>
                  <TableCell>{goal.title}</TableCell>
                  <TableCell>P$ {goal.points}</TableCell>
                  <TableCell>{goal.child.user.name}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href={`goals/${goal.id}`}>Editar</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardGoalsPage;
