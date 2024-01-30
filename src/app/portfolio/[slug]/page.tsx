import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioAbout from "@/components/Portfolio/PortfolioAbout";

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

  return (
    <>
      <PortfolioHero portfolio={portfolio} />
      <PortfolioAbout description={portfolio.about} />
    </>
  );
};

export default Page;
