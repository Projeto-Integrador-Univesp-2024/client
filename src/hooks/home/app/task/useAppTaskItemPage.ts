import { TaskClass } from "@/action/task.action";
import { useToast } from "@/hooks/use-toast";
import { TaskType } from "@/types/task";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const useAppTaskItemPage = (task: TaskType.Item) => {
	const { toast } = useToast();
	const [check, setCheck] = useState(task.status == "DONE");

	const mutation = useMutation({
		mutationFn: async () => {
			setCheck(true);
			const taskClass = new TaskClass();
			return await taskClass.check(task.id);
		},
		onSuccess: (response) => {
			if (response.status === 201) {
				toast({
					title: "Usuário criado com sucesso!",
				});
			} else {
				toast({
					title: "Erro ao criar Usuário",
					description: `${response.message}`,
					variant: "destructive",
				});
			}
		},
		onError: (error: { message: string }) => {
			toast({
				title: "Erro ao criar Usuário",
				description: `${error.message}`,
				variant: "destructive",
			});
		},
	});

	const onCheck = () => {
		mutation.mutate();
	};
	return { check, onCheck };
};

export default useAppTaskItemPage;
