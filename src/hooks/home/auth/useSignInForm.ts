import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "../../use-toast";
import {
  SignInFormSchema,
  SignInFormValues,
} from "@/schemas/auth/signin-schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const useSignInForm = () => {
  const router = useRouter();

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
  });

  const mutation = useMutation({
    mutationFn: async (values: SignInFormValues) => {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      return response;
    },
    onSuccess: (response) => {
      if (response?.status === 200) {
        router.push(`/`);
      } else {
        toast({
          title: "Erro ao autenticar",
          description: `${response?.error}`,
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Erro inesperado",
        description: "Não foi possível realizar o login.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (values: SignInFormValues) => {
    mutation.mutate(values);
  };

  return { form, onSubmit, isLoading: mutation.isPending };
};

export default useSignInForm;
