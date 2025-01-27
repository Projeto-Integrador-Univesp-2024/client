"use client";

import DashboardHeader from "@/components/dashboard/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import useDashboardChild from "@/hooks/home/dashboard/childs/useDashboardChild";
import { MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

interface DashboardChildsPageProps {
  params: {
    userId: string;
  };
}

const DashboardChildsPage = ({ params }: DashboardChildsPageProps) => {
  const { children, isLoading } = useDashboardChild(params.userId);

  if (isLoading) {
    return <div>a</div>;
  }

  return (
    <main className="flex h-full w-full flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <DashboardHeader
        title="Crianças"
        link={{
          href: "childs/new",
          children: "Adicionar Criança",
          icon: Plus,
        }}
      />
      <Card className="w-full">
        <CardContent>
          <Table>
            <TableCaption>
              {children && children.length !== 0
                ? "Todas as crianças cadastradas."
                : "Nenhuma criança cadastrada."}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Avatar</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Idade</TableHead>
                <TableHead>Pontos</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {children!.map((child, index) => (
                <TableRow className="text-stone-800" key={index}>
                  <TableCell className="font-medium">
                    <Avatar className="size-20">
                      <AvatarImage src={`/img/avatar/${child.user.image}`} />
                      <AvatarFallback>{child.user.name}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{child.user.name}</TableCell>
                  <TableCell>{child.user.email}</TableCell>
                  <TableCell>{child.user.age}</TableCell>
                  <TableCell>P$ {child.points}</TableCell>
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
                          <Link href={`childs/${child.user.publicId}`}>
                            Editar
                          </Link>
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

export default DashboardChildsPage;
