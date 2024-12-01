import { AddButton, AddButtonProps } from "./addButton";

interface DashboardHeaderProps {
  title: string;
  link?: AddButtonProps;
}

const DashboardHeader = ({ title, link }: DashboardHeaderProps) => {
  return (
    <div className="flex w-full">
      <h1 className="text-2xl lg:text-4xl font-bold text-stone-800">{title}</h1>
      {link && <AddButton {...link} />}
    </div>
  );
};

export default DashboardHeader;
