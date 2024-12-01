"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MetricsType } from "@/types/metrics";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import moment from "moment";

export const columns: ColumnDef<MetricsType.LastTasks>[] = [
  {
    accessorKey: "child.user.name",
    header: "Crianca",
  },
  {
    accessorKey: "name",
    header: "Tarefa",
  },
  {
    accessorKey: "updatedAt",
    header: "Data",
    cell: ({ row }) => {
      const data = row.original.updatedAt;

      return <p>{moment(data).format("DD/MM/YYYY")}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          className={`text-stone-100 transition-colors ${
            status === "PENDING"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : status === "FAILED"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "points",
    header: "Pontos",
    cell: ({ row }) => {
      return <>P$ {row.original.points}</>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem disabled={task.status !== "PENDING"}>
              <Link href={`tasks/${task.id}`}>Editar</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
