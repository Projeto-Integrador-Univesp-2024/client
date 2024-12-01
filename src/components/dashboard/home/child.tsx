"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useDashboardHomeChild from "@/hooks/home/dashboard/useDashboardHomeChild";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import DashboardLoading from "../loading";

interface DashboardHomeChildProps {
  guardianId: string;
}

const chartConfig = {
  donePoints: {
    label: "Feito",
    color: "#22c55e",
  },
  failedPoints: {
    label: "Não Feito",
    color: "#ef4444",
  },
} satisfies ChartConfig;

const DashboardHomeChild = ({ guardianId }: DashboardHomeChildProps) => {
  const {
    children,
    childValue,
    childMetrics,
    isLoading,
    openCombobox,
    setChildValue,
    setOpenCombobox,
  } = useDashboardHomeChild(guardianId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <Card className="h-full flex-1">
      <CardHeader>
        <CardTitle>Crianças</CardTitle>
      </CardHeader>
      <CardContent>
        <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCombobox}
              className="w-[200px] justify-between"
            >
              {childValue
                ? children!.find((child) => child.id.toString() === childValue)
                    ?.user.name
                : "Selecionar crianca..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Buscar Crianca..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {children!.map((child) => (
                    <CommandItem
                      key={child.id}
                      value={`${child.id}`}
                      onSelect={(currentValue) => {
                        setChildValue(
                          currentValue === childValue ? "" : currentValue,
                        );
                        setOpenCombobox(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          childValue === child.id.toString()
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {child.user.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {childMetrics && (
          <ChartContainer config={chartConfig} className="min-h-[450px] w-full">
            <BarChart accessibilityLayer data={childMetrics}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 7)}
              />
              <ChartTooltip
                content={<ChartTooltipContent className="bg-stone-100" />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="donePoints"
                fill="var(--color-donePoints)"
                radius={4}
              />
              <Bar
                dataKey="failedPoints"
                fill="var(--color-failedPoints)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardHomeChild;
