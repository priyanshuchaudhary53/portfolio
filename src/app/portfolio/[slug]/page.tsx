import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioImages from "@/components/Portfolio/PortfolioImages";
import PortfolioProjects from "@/components/Portfolio/PortfolioProjects";
import PortfolioText from "@/components/Portfolio/PortfolioText";
import { portfolioItems } from "@/data/portfolio";

async function getPortolio({ slug }: { slug: string }) {
  const res = await fetch(
    `https://portfolio-nextjs-de5d5-default-rtdb.firebaseio.com/portfolios/${slug}.json`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Something went wrong! Please refresh or try again later.");
  }

  const data = await res.json();
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const portfolio = await getPortolio({ slug });

  const firstImages = [
    `/images/portfolio/${slug}/screenshot-1.jpg`,
    `/images/portfolio/${slug}/screenshot-2.jpg`,
    `/images/portfolio/${slug}/screenshot-3.jpg`,
  ];

  const secondImages = [
    `/images/portfolio/${slug}/screenshot-4.jpg`,
    `/images/portfolio/${slug}/screenshot-5.jpg`,
    `/images/portfolio/${slug}/screenshot-6.jpg`,
  ];

  const moreProjects = portfolioItems
    .filter((item) => item.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <>
      <PortfolioHero portfolio={portfolio} />
      <PortfolioText title="About the project" description={portfolio.about} />
      <PortfolioImages
        style="one"
        firstImage={firstImages[0]}
        secondImage={firstImages[1]}
        thirdImage={firstImages[2]}
      />
      <PortfolioText title="The solution" description={portfolio.solution} />
      <PortfolioImages
        style="two"
        firstImage={secondImages[0]}
        secondImage={secondImages[1]}
        thirdImage={secondImages[2]}
      />
      <PortfolioText title="Result" description={portfolio.result} />
      <PortfolioProjects portfolioItems={moreProjects} title="MORE PROJECTS" />
    </>
  );
};

export default Page;
