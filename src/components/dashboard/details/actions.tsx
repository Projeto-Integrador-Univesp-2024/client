"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const DashboardDetailsActions = () => {
  const router = useRouter();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="text-stone-800">
            Descartar
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-stone-100">
          <DialogHeader>
            <DialogTitle className="font-bold text-stone-800">
              Tem certeza que deseja descartar as alteracoes?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Cancelar</Button>
            </DialogClose>
            <Button onClick={() => router.back()} variant="secondary">
              Cofirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button size="sm" type="submit">
        Salvar/Criar
      </Button>
    </>
  );
};

export default DashboardDetailsActions;
