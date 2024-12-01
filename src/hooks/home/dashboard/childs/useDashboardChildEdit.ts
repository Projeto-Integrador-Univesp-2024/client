import { ChildClass } from "@/action/child.action";
import { useFindOneChild } from "@/hooks/data/useChild";
import { useToast } from "@/hooks/use-toast";
import {
  DashboardChildFormSchema,
  DashboardChildFormValues,
} from "@/schemas/dashboard/childs/child-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useDashboardChildEdit = (childId: string, guardianId: string) => {
  const { toast } = useToast();

  const form = useForm<DashboardChildFormValues>({
    resolver: zodResolver(DashboardChildFormSchema),
  });

  const { data: child, isLoading } = useFindOneChild(childId);

  useEffect(() => {
    if (child) {
      form.reset({
        name: child.user.name,
        dateOfBirth: new Date(child.user.dateOfBirth)
          .toISOString()
          .split("T")[0],
        email: child.user.email,
        password: undefined,
        image: child.user.image ?? undefined,
      });
    }
  }, [child, form]);

  const title =
    childId === "new"
      ? "Nova Criança"
      : `Editar Criança: ${child ? child.user.name : ""}`;

  const mutation = useMutation({
    mutationFn: async (values: DashboardChildFormValues) => {
      const childClass = new ChildClass();
      if (child) {
        return await childClass.updateChild(values, childId);
      } else {
        return await childClass.createChild(values, guardianId);
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

  const onSubmit = async (values: DashboardChildFormValues) => {
    mutation.mutate(values);
  };

  return { title, form, onSubmit, isLoading };
};

export default useDashboardChildEdit;
