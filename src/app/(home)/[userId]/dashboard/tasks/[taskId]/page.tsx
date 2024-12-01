"use client";

import DashboardDetailsFooter from "@/components/dashboard/details/footer";
import DashboardDetailsHeader from "@/components/dashboard/details/header";
import DashboardLoading from "@/components/dashboard/loading";
import DashboardTaskEditInformation from "@/components/dashboard/tasks/edit/information";
import { Form } from "@/components/ui/form";
import useDashboardTasksEdit from "@/hooks/home/dashboard/tasks/useDashboardTasksEdit";

interface DashboardTaskEditPageProps {
  params: {
    userId: string;
    taskId: string;
  };
}

const DashboardTaskEditPage = ({ params }: DashboardTaskEditPageProps) => {
  const { title, form, onSubmit, isLoading } = useDashboardTasksEdit(
    params.taskId,
  );

  if (isLoading) {
    <DashboardLoading />;
  }

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Form {...form}>
        <form
          className="mx-auto grid w-full flex-1 auto-rows-max gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <DashboardDetailsHeader title={title} />
          <DashboardTaskEditInformation
            form={form}
            guardianId={params.userId}
          />
          <DashboardDetailsFooter />
        </form>
      </Form>
    </main>
  );
};

export default DashboardTaskEditPage;
