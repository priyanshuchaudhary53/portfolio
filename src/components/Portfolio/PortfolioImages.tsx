import SectionWrapper from "../Layout/SectionWrapper";
import PortfolioImage from "./PortfolioImage";

const PortfolioImages = ({
  style,
  firstImage,
  secondImage,
  thirdImage,
}: {
  style: "one" | "two";
  firstImage: string;
  secondImage?: string;
  thirdImage?: string;
}) => {
  return (
    <SectionWrapper>
      <div className="grid gap-4 grid-cols-2">
        <PortfolioImage
          image={firstImage}
          className={style === "one" ? "col-span-2" : "col-span-2 sm:col-span-1"}
        />
        {secondImage && (
          <PortfolioImage
            image={secondImage}
            className={style === "one" ? "col-span-2 sm:col-span-1" : "col-span-2 sm:col-span-1"}
          />
        )}
        {thirdImage && (
          <PortfolioImage
            image={thirdImage}
            className={style === "one" ? "col-span-2 sm:col-span-1" : "col-span-2"}
          />
        )}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioImages;
