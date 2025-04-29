"use client";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface PasswordAuthFormItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, string>;
}

export const PasswordAuthFormItem = ({ field }: PasswordAuthFormItemProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormItem>
      <FormLabel className="text-stone-800">Senha</FormLabel>
      <FormControl>
        <div className="relative flex items-center">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            {...field}
            className="w-full border border-stone-800 bg-stone-100 pr-10 text-stone-800"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-stone-800 focus:outline-hidden"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
