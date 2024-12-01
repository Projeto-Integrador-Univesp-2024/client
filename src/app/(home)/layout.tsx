"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default HomeLayout;
