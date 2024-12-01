import { TaskClass } from "@/action/task.action";
import { useFindOneTask } from "@/hooks/data/useTask";
import { useToast } from "@/hooks/use-toast";
import {
  DashboardTaskFormSchema,
  DashboardTaskFormValues,
} from "@/schemas/dashboard/tasks/task-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useDashboardTasksEdit = (taskId: string) => {
  const { toast } = useToast();

  const form = useForm<DashboardTaskFormValues>({
    resolver: zodResolver(DashboardTaskFormSchema),
  });

  const { data: task, isLoading, isError } = useFindOneTask(+taskId);

  useEffect(() => {
    if (task) {
      form.reset({
        name: task.name,
        deadline: new Date(task.deadline).toISOString().split("T")[0],
        points: task.points,
        taskTypeId: task.taskTypeId,
      });
    }
  }, [task, form]);

  const title =
    taskId === "new"
      ? "Nova Tarefa"
      : `Editar Tarefa: ${task ? task.name : ""}`;

  const mutation = useMutation({
    mutationFn: async (values: DashboardTaskFormValues) => {
      const taskClass = new TaskClass();
      if (task) {
        return await taskClass.update(values, +taskId);
      } else {
        return await taskClass.create(values);
      }
    },
    onSuccess: () => {
      toast({
        title: "Operação bem-sucedida",
        variant: "success",
      });
    },
    onError: (error: { message: string }) => {
      toast({
        title: "Erro ao salvar a criança",
        description: error.message,
      });
    },
  });

  const onSubmit = async (values: DashboardTaskFormValues) => {
    mutation.mutate(values);
  };

  return {
    form,
    title,
    isLoading,
    isError,
    onSubmit,
  };
};

export default useDashboardTasksEdit;
