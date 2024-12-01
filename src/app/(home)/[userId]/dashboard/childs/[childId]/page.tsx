"use client";

import DashboardChildAvatar from "@/components/dashboard/childs/avatar";
import DashboardChildInformation from "@/components/dashboard/childs/information";
import DashboardDetailsFooter from "@/components/dashboard/details/footer";
import DashboardDetailsHeader from "@/components/dashboard/details/header";
import DashboardLoading from "@/components/dashboard/loading";
import { Form } from "@/components/ui/form";
import useDashboardChildEdit from "@/hooks/home/dashboard/childs/useDashboardChildEdit";

interface DashboardChildEditPageProps {
  params: {
    userId: string;
    childId: string;
  };
}

const DashboardChildEditPage = ({ params }: DashboardChildEditPageProps) => {
  const { title, form, onSubmit, isLoading } = useDashboardChildEdit(
    params.childId,
    params.userId,
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
          <DashboardChildInformation form={form} />
          <DashboardChildAvatar form={form} />
          <DashboardDetailsFooter />
        </form>
      </Form>
    </main>
  );
};

export default DashboardChildEditPage;
