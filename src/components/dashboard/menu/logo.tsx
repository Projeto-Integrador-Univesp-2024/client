import Image from "next/image";
import Link from "next/link";

const DashboardMenuLogo = () => {
  return (
    <Link
      href="/"
      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
    >
      <Image src="/img/jefilogo.png" alt="Jefi Logo" width={24} height={16} />
      <span className="sr-only">JEFI</span>
    </Link>
  );
};

export default DashboardMenuLogo;
