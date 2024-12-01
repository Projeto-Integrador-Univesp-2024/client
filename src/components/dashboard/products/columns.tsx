"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import moment from "moment";
import { ProductType } from "@/types/product";
import Image from "next/image";

export const columns: ColumnDef<ProductType.Item>[] = [
  {
    accessorKey: "image",
    header: "Nome",
    cell: ({ row }) => {
      return (
        <Image
          src={"/" + row.original.image}
          alt={row.original.name}
          height={150}
          width={150}
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nome",
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
    accessorKey: "points",
    header: "Pontos",
    cell: ({ row }) => {
      return <>P$ {row.original.points}</>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

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
            <DropdownMenuItem>
              <Link href={`tasks/${product.id}`}>Editar</Link>
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
