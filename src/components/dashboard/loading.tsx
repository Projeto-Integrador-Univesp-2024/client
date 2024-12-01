import { PropagateLoader } from "react-spinners";

const DashboardLoading = () => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <PropagateLoader />
    </div>
  );
};

export default DashboardLoading;
