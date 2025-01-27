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
import useDashboardTaskTypes from "@/hooks/home/dashboard/task-types/useDashboardTaskTypes";
import { MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

interface DashboardTaskTypesPageProps {
  params: {
    userId: string;
  };
}

const DashboardTaskTypesPage = ({ params }: DashboardTaskTypesPageProps) => {
  const { taskTypes, isLoading } = useDashboardTaskTypes(params.userId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <main className="flex h-full w-full flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <DashboardHeader
        title="Tipo de Tarefa"
        link={{
          href: "task-types/new",
          children: "Adicionar Tipo de Tarefa",
          icon: Plus,
        }}
      />
      <Card className="w-full">
        <CardContent>
          <Table>
            <TableCaption>
              {taskTypes && taskTypes.length !== 0
                ? "Todos os tipos de tarefas cadastrados."
                : "Nenhum tipo de tarefa cadastrado."}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Recorrência</TableHead>
                <TableHead>Tipo de Recorrência</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taskTypes!.map((taskType, index) => (
                <TableRow className="text-stone-800" key={index}>
                  <TableCell>{taskType.name}</TableCell>
                  <TableCell>{taskType.recurrence}</TableCell>
                  <TableCell>{taskType.recurrenceType}</TableCell>
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
                          <Link href={`task-types/${taskType.id}`}>Editar</Link>
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

export default DashboardTaskTypesPage;
