import { TaskTypeClass } from "@/action/taskType.action";
import { useFindOneGoal } from "@/hooks/data/useGoals";
import { useToast } from "@/hooks/use-toast";
import {
	DashboardGoalFormSchema,
	DashboardGoalFormValues,
} from "@/schemas/dashboard/goals/goal-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useDashboardGoalEdit = (goalId: string) => {
	const { toast } = useToast();

	const form = useForm<DashboardGoalFormValues>({
		resolver: zodResolver(DashboardGoalFormSchema),
	});

	const { data: goal, isLoading, isError } = useFindOneGoal(+goalId);

	useEffect(() => {
		if (goal) {
			form.reset({
				title: goal.title,
				points: goal.points,
				childId: goal.childId,
			});
		}
	}, [goal, form]);

	const title =
		goalId === "new"
			? "Novo Objetivo"
			: `Editar Tarefa: ${goal ? goal.title : ""}`;

	const mutation = useMutation({
		mutationFn: async (values: DashboardGoalFormValues) => {
			const taskTypeClass = new TaskTypeClass();
			if (goal) {
				return await taskTypeClass.update(values, +goalId);
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

	const onSubmit = async (values: DashboardGoalFormValues) => {
		mutation.mutate(values);
	};

	return { goal, isLoading, isError, title, onSubmit, form };
};

export default useDashboardGoalEdit;
