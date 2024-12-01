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
import { DashboardTaskTypeFormValues } from "@/schemas/dashboard/task-types/task-type-schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DashboardTaskEditInformationProps {
  form: UseFormReturn<DashboardTaskTypeFormValues>;
}

const DashboardTaskTypeEditInformation = ({
  form,
}: DashboardTaskEditInformationProps) => {
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
            name="name"
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
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cor</FormLabel>
                <Select {...field}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a cor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bg-stone-300">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full border border-stone-600 bg-stone-300" />
                        <p>Padrao</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="bg-green-300">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full border border-stone-600 bg-green-300" />
                        <p>Verde</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="bg-red-300">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full border border-stone-600 bg-red-300" />
                        <p>Vermelho</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="bg-yellow-300">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full border border-stone-600 bg-yellow-300" />
                        <p>Amarelo</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="bg-blue-300">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full border border-stone-600 bg-blue-300" />
                        <p>Azul</p>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recurrenceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Recorrencia</FormLabel>
                <Select {...field}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de recorrencia" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="DAY">DAY</SelectItem>
                    <SelectItem value="WEEK">WEEK</SelectItem>
                    <SelectItem value="MONTH">MONTH</SelectItem>
                    <SelectItem value="YEAR">YEAR</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recurrence"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recorrencia</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardTaskTypeEditInformation;
