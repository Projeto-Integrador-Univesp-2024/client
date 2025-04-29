import { TaskTypeClass } from "@/action/taskType.action";
import { useFindOneTaskType } from "@/hooks/data/useTaskType";
import { useToast } from "@/hooks/use-toast";
import {
	DashboardTaskTypeFormSchema,
	DashboardTaskTypeFormValues,
} from "@/schemas/dashboard/task-types/task-type-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useDashboardTaskTypeEdit = (taskTypeId: string) => {
	const { toast } = useToast();

	const form = useForm<DashboardTaskTypeFormValues>({
		resolver: zodResolver(DashboardTaskTypeFormSchema),
		defaultValues: {
			recurrence: 0,
		},
	});

	const {
		data: taskType,
		isLoading,
		isError,
	} = useFindOneTaskType(+taskTypeId);

	useEffect(() => {
		if (taskType) {
			form.reset({
				name: taskType.name,
				color: taskType.color,
				recurrence: taskType.recurrence,
				recurrenceType: taskType.recurrenceType,
			});
		}
	}, [taskType, form]);

	const title =
		taskTypeId === "new"
			? "Novo Tipo Tarefa"
			: `Editar Tarefa: ${taskType ? taskType.name : ""}`;

	const mutation = useMutation({
		mutationFn: async (values: DashboardTaskTypeFormValues) => {
			const taskTypeClass = new TaskTypeClass();
			if (taskType) {
				return await taskTypeClass.update(values, +taskTypeId);
			} else {
				return await taskTypeClass.create(values);
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

	const onSubmit = async (values: DashboardTaskTypeFormValues) => {
		mutation.mutate(values);
	};

	return { taskType, isLoading, isError, title, onSubmit, form };
};

export default useDashboardTaskTypeEdit;
