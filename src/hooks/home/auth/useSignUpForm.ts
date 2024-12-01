import {
  SignUpFormSchema,
  SignUpFormValues,
} from "@/schemas/auth/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "../../use-toast";
import { useRouter } from "next/navigation";
import { UserClass } from "@/action/user.action";
import { useMutation } from "@tanstack/react-query";

const useSignUpForm = () => {
  const router = useRouter();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      terms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: SignUpFormValues) => {
      const user = new UserClass();
      return await user.create(values);
    },
    onSuccess: (response) => {
      if (response.status === 201) {
        toast({
          title: "Usuário criado com sucesso!",
        });

        router.push("/auth/signin");
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

  const onSubmit = async (values: SignUpFormValues) => {
    mutation.mutate(values);
  };

  return { form, onSubmit };
};

export default useSignUpForm;
