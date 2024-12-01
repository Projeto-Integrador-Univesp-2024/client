import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface DefaultAuthFormItemProps {
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, string>;
}

export const DefaultAuthFormItem = ({
  label,
  placeholder,
  type,
  field,
}: DefaultAuthFormItemProps) => {
  return (
    <FormItem>
      <FormLabel className="text-stone-800">{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          type={type ?? "text"}
          {...field}
          className="border border-stone-800 bg-stone-100 text-stone-800"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
