"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardTaskFormValues } from "@/schemas/dashboard/tasks/task-schema";
import { UseFormReturn } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useDashboardTaskEditInformation from "@/hooks/home/dashboard/tasks/edit/useDashboardTaskEditInformation";
import DashboardLoading from "../../loading";

interface DashboardTaskEditInformationProps {
  form: UseFormReturn<DashboardTaskFormValues>;
  guardianId: string;
}

const DashboardTaskEditInformation = ({
  form,
  guardianId,
}: DashboardTaskEditInformationProps) => {
  const { taskTypes, isLoading } = useDashboardTaskEditInformation(guardianId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tarefa</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite o nome da Tarefa" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="points"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pontos</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel>Prazo</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid w-full grid-cols-3 gap-2">
            {taskTypes ? (
              <FormField
                control={form.control}
                name="taskTypeId"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Tipo de Tarefa</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={`${field.value}`}
                      defaultValue={`${field.value}`}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de tarefa" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {taskTypes.map((taskType, index) => (
                          <SelectItem value={`${taskType.id}`} key={index}>
                            {taskType.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null}
            <div className="flex w-full flex-1 items-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Cadastrar tipo de Tarefa</Button>
                </DialogTrigger>
                <DialogContent className="bg-stone-100">
                  <DialogHeader>
                    <DialogTitle className="">Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardTaskEditInformation;
