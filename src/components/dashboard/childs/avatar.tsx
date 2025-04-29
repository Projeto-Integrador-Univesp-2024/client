import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useDashboardChildAvatar from "@/hooks/home/dashboard/childs/useDashboardChildAvatar";
import { cn } from "@/lib/utils";
import { DashboardChildFormValues } from "@/schemas/dashboard/childs/child-schema";
import { UseFormReturn } from "react-hook-form";

interface DashboardChildAvatarProps {
  form: UseFormReturn<DashboardChildFormValues>;
}

const DashboardChildAvatar = ({ form }: DashboardChildAvatarProps) => {
  const { avatars } = useDashboardChildAvatar();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Definir o Avatar</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ToggleGroup
                  type="single"
                  value={field.value}
                  onValueChange={(value: string | undefined) =>
                    field.onChange(value === "" ? undefined : value)
                  }
                  className="grid grid-cols-3 gap-6 md:grid-cols-6 lg:grid-cols-9"
                >
                  {avatars.map((avatar, index) => (
                    <ToggleGroupItem
                      aria-label="Toggle bold"
                      className="cursor-pointer bg-transparent hover:bg-transparent data-state:bg-transparent"
                      key={index}
                      value={avatar}
                      asChild
                    >
                      <Avatar
                        className={cn(
                          "size-20 transition duration-300 ease-in-out",
                          field.value === avatar
                            ? ""
                            : "grayscale hover:grayscale-0",
                        )}
                      >
                        <AvatarImage src={`/img/avatar/${avatar}`} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default DashboardChildAvatar;
