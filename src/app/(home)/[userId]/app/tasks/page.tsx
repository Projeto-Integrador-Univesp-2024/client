"use client";

import AppLoading from "@/components/app/loadind";
import TaskItem from "@/components/app/task-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import useAppTaskPage from "@/hooks/home/app/task/useAppTaskPage";

interface PageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { tasks, isLoading } = useAppTaskPage(params.userId);

  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <main className="flex h-full w-full flex-col gap-3 rounded-t-lg bg-stone-100 px-3 py-6 text-stone-800">
      <ScrollArea className="h-[560px] lg:h-[660px]">
        <div className="flex flex-col gap-3 pr-4 lg:pr-3">
          {tasks!.map((task, index) => (
            <TaskItem key={index} {...task} />
          ))}
        </div>
      </ScrollArea>
    </main>
  );
};

export default Page;
