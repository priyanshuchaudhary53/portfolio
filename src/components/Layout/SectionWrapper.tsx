import { ReactNode } from "react";

const SectionWrapper = ({
  children,
  className,
  size,
}: {
  children: ReactNode;
  className?: string;
  size?: "regular" | "extended";
}) => {
  return (
    <section className={`py-14 lg:py-20 ${className}`}>
      <div
        className={`px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px] ${
          size === "extended" ? "max-w-[1760px]" : "max-w-[1440px]"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
