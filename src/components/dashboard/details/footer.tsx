import DashboardDetailsActions from "./actions";

const DashboardDetailsFooter = () => {
  return (
    <div className="flex items-center justify-center gap-2 md:hidden">
      <DashboardDetailsActions />
    </div>
  );
};

export default DashboardDetailsFooter;
