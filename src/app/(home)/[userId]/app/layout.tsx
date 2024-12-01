"use client";

import AppLoading from "@/components/app/loadind";
import MenuDesktop from "@/components/app/menu/desktop";
import MenuMobile from "@/components/app/menu/mobile";
import { Button } from "@/components/ui/button";
import useUserLayout from "@/hooks/home/user/useLayout";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface UserLayoutProps {
  children: ReactNode;
  params: { userId: string };
}

const UserLayout = ({ children, params }: UserLayoutProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const { items, validatePath, userChild } = useUserLayout(
    session,
    status,
    params.userId,
    router,
    pathname,
  );

  if (status === "loading") {
    return <AppLoading />;
  }

  const top = (
    <div className="flex w-full justify-items-start p-6">
      <Button
        className="w-fit bg-sky-500 text-stone-100 hover:bg-sky-700"
        onClick={() => {
          router.back();
        }}
      >
        <ChevronLeft />
      </Button>
      <h4
        className={cn(
          "w-full text-center text-2xl font-bold",
          items.find((a) => a.link === pathname)?.text,
        )}
      >
        {items.find((a) => a.link === pathname)?.title}
      </h4>
      <div className="ml-auto mr-0 flex gap-3">
        <h4 className="text-nowrap">
          Pontos Totais:
          <br />
          <span className="text-nowrap font-bold text-sky-500">
            P$ {userChild ? userChild.points : 0}
          </span>
        </h4>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        `flex h-full w-full flex-col items-center justify-center pt-6`,
        items.find((a) => a.link === pathname)?.bg,
      )}
    >
      <div className="grid w-full grid-cols-1 justify-items-center lg:grid-cols-2">
        <Link href={`/app/${params.userId}`}>
          <Image
            className="h-12 w-24 lg:h-24 lg:w-52"
            src="/img/jefilogo.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>

        <MenuDesktop userId={params.userId} />
      </div>

      {validatePath ? top : null}
      {children}
      <MenuMobile userId={params.userId} />
    </div>
  );
};

export default UserLayout;
