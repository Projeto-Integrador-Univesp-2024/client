import { PacmanLoader } from "react-spinners";

const AppLoading = () => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <PacmanLoader />
    </div>
  );
};

export default AppLoading;
