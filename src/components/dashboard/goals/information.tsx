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
import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardGoalFormValues } from "@/schemas/dashboard/goals/goal-schema";
import useDashboardGoalEditInformation from "@/hooks/home/dashboard/goals/edit/useDashboardGoalEditInformation";
import DashboardLoading from "../loading";

interface DashboardGoalInformationProps {
  form: UseFormReturn<DashboardGoalFormValues>;
  guardianId: string;
}

const DashboardGoalEditInformation = ({
  form,
  guardianId,
}: DashboardGoalInformationProps) => {
  const { children, isLoading } = useDashboardGoalEditInformation(guardianId);

  if (isLoading || !children) {
    <DashboardLoading />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipo Tarefa</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="lg:col-span-3">
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
              <FormItem className="lg:col-span-3">
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
            name="childId"
            render={({ field }) => {
              console.log(field.value);
              return (
                <FormItem className="col-span-2">
                  <FormLabel>Criancas</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={`${field.value}`}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de tarefa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {children!.map((child, index) => {
                        console.log(field.value === child.id);
                        return (
                          <SelectItem value={`${child.id}`} key={index}>
                            {child.user.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardGoalEditInformation;
