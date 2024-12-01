"use client";

import DashboardDetailsFooter from "@/components/dashboard/details/footer";
import DashboardDetailsHeader from "@/components/dashboard/details/header";
import DashboardGoalEditInformation from "@/components/dashboard/goals/information";
import DashboardLoading from "@/components/dashboard/loading";
import { Form } from "@/components/ui/form";
import useDashboardGoalEdit from "@/hooks/home/dashboard/goals/useDashboardGoalEdit";

interface DashboardGoalEditPageProps {
  params: {
    goalId: string;
    userId: string;
  };
}

const DashboardGoalEditPage = ({ params }: DashboardGoalEditPageProps) => {
  const { title, form, onSubmit, isLoading } = useDashboardGoalEdit(
    params.goalId,
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
          <DashboardGoalEditInformation
            form={form}
            guardianId={params.userId}
          />
          <DashboardDetailsFooter />
        </form>
      </Form>
    </main>
  );
};

export default DashboardGoalEditPage;
