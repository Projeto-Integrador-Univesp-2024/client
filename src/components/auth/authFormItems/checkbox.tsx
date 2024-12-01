"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReactNode } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface CheckboxAuthFormItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, string>;
  label: ReactNode;
}

export const CheckboxAuthFormItem = ({
  field,
  label,
}: CheckboxAuthFormItemProps) => {
  return (
    <FormItem className="py-4">
      <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <div className="space-y-1 leading-none">
          <FormLabel className="text-stone-800">{label}</FormLabel>
        </div>
      </div>

      <FormMessage />
    </FormItem>
  );
};
