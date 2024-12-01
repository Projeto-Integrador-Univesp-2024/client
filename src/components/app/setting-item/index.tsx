"use client";

import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { SettingType } from "@/types/setting";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const SettingItem = ({ active, link, ...props }: SettingType.Item) => {
  const body = <Item link={link} active={active} {...props} />;
  if (active) {
    if (link == "/sign-out") {
      return (
        <button onClick={() => signOut()} className="hover:cursor-pointer">
          {body}
        </button>
      );
    }
    return (
      <Link href={link} className="hover:cursor-pointer">
        {body}
      </Link>
    );
  } else {
    return body;
  }
};

const Item = ({ title, icon, bg, active }: SettingType.Item) => {
  const Icon = icon;
  return (
    <Card
      className={cn(
        "p-3 shadow-none",
        active ? (bg ?? "bg-sky-500") : "bg-stone-500",
      )}
    >
      <CardContent className="flex w-full items-center p-0">
        <div className="flex h-full w-full items-center gap-3 text-stone-100">
          <Icon />
          <p className="text-xl font-semibold">{title}</p>
        </div>
        <ChevronRight className="size-6 text-stone-100" />
      </CardContent>
    </Card>
  );
};

export default SettingItem;
