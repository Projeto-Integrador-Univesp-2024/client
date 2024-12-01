"use client";

import { Trophy } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
import { TaskType } from "@/types/task";
import { cn } from "@/lib/utils";
import useAppTaskItemPage from "@/hooks/home/app/task/useAppTaskItemPage";

const TaskItem = (task: TaskType.Item) => {
  const { check, onCheck } = useAppTaskItemPage(task);

  return (
    <Card
      className={cn(
        "border border-stone-600 p-3 shadow-none",
        task.tasktypes ? task.tasktypes.color : "bg-stone-100",
      )}
      key={task.id}
    >
      <CardContent className="flex w-full items-center p-0">
        <div className="flex h-full w-full flex-col items-start gap-3">
          <p className="text-xl font-black text-stone-800">{task.name}</p>
          <Badge className="flex gap-3 border border-stone-600 bg-yellow-400">
            <Trophy />
            <p>P$ {task.points} Pontos</p>
          </Badge>
        </div>
        <Checkbox className="size-6" checked={check} onClick={onCheck} />
      </CardContent>
    </Card>
  );
};

export default TaskItem;
