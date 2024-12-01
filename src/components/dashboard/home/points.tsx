import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { File, ListFilter } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import useDashboardHomePoints from "@/hooks/home/dashboard/useDashboardHomePoints";
import DashboardLoading from "../loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardHomePointsProps {
  guardianId: string;
}

const DashboardHomePoints = ({ guardianId }: DashboardHomePointsProps) => {
  const { lastTasks, filters, lastTasksFilter, setLastTasksFilter, isLoading } =
    useDashboardHomePoints(guardianId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <Card className="h-full flex-1 sm:col-span-2">
      <CardHeader>
        <CardTitle>Pontos Ganhos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm text-stone-800"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filtrar</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filters.map((filter, index) => (
                  <DropdownMenuCheckboxItem
                    key={index}
                    onSelect={() => setLastTasksFilter(filter.value)}
                    checked={filter.value === lastTasksFilter}
                  >
                    {filter.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-sm text-stone-800"
            >
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Exportar</span>
            </Button>
          </div>
        </div>
        {lastTasks && <DataTable columns={columns} data={lastTasks} />}
      </CardContent>
    </Card>
  );
};

export default DashboardHomePoints;
