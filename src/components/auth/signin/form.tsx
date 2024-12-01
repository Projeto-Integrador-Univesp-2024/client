"use client";

import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PasswordAuthFormItem } from "../authFormItems/password";
import { DefaultAuthFormItem } from "../authFormItems/default";
import useSignInForm from "@/hooks/home/auth/useSignInForm";

const SignInForm = () => {
  const { form, onSubmit } = useSignInForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
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
        <Button
          type="submit"
          className="w-full bg-sky-500 text-stone-100 hover:bg-sky-700 lg:w-fit"
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
