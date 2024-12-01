"use client";

import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSignUpForm from "@/hooks/home/auth/useSignUpForm";
import { DefaultAuthFormItem } from "../authFormItems/default";
import { PasswordAuthFormItem } from "../authFormItems/password";
import { CheckboxAuthFormItem } from "../authFormItems/checkbox";

const SignUpForm = () => {
  const { form, onSubmit } = useSignUpForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 px-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <DefaultAuthFormItem
              label="Nome"
              placeholder="Nome"
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <DefaultAuthFormItem
              label="Data de Nascimento"
              placeholder="Data de Nascimento"
              field={field}
              type="date"
            />
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <DefaultAuthFormItem
              label="Email"
              placeholder="Email"
              field={field}
              type="email"
            />
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => <PasswordAuthFormItem field={field} />}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <CheckboxAuthFormItem
              field={field}
              label={
                <>
                  Concordo com os{" "}
                  <Link
                    href="/"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Termos e Condicoes
                  </Link>
                </>
              }
            />
          )}
        />
        <Button
          type="submit"
          className="w-full bg-sky-500 text-stone-100 hover:bg-sky-700 lg:w-fit"
        >
          Criar Usuário
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
