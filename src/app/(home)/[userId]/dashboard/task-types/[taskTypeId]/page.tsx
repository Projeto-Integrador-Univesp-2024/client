"use client";

import DashboardDetailsFooter from "@/components/dashboard/details/footer";
import DashboardDetailsHeader from "@/components/dashboard/details/header";
import DashboardLoading from "@/components/dashboard/loading";
import DashboardTaskTypeEditInformation from "@/components/dashboard/task-types/edit/information";
import { Form } from "@/components/ui/form";
import useDashboardTaskTypeEdit from "@/hooks/home/dashboard/task-types/useDashboardTaskTypeEdit";

interface DashboardTaskTypeEditPageProps {
  params: {
    taskTypeId: string;
    userId: string;
  };
}

const DashboardTaskTypeEditPage = ({
  params,
}: DashboardTaskTypeEditPageProps) => {
  const { title, form, onSubmit, isLoading } = useDashboardTaskTypeEdit(
    params.taskTypeId,
  );

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Form {...form}>
        <form
          className="mx-auto grid w-full flex-1 auto-rows-max gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <DashboardDetailsHeader title={title} />
          <DashboardTaskTypeEditInformation form={form} />
          <DashboardDetailsFooter />
        </form>
      </Form>
    </main>
  );
};

export default DashboardTaskTypeEditPage;
