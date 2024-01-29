import Image from "next/image";

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
    <section className="py-14 lg:py-20">
      <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
        <div className="flex flex-col xl:flex-row gap-y-5 justify-end relative items-center">
          <div className="static xl:absolute xl:left-0 xl:top-20 xl:w-1/2">
            <h1 className="text-4xl text-center xl:text-start md:text-7xl text-gray-800 font-bold uppercase xl:mix-blend-exclusion dark:text-white">
              {portfolio.title}
            </h1>
          </div>
          <div className="rounded-3xl w-full max-w-4xl aspect-[4/3] overflow-clip border-2 bg-gray-200 dark:bg-gray-800 border-gray-200 dark:border-gray-800 ">
            <Image
              src={`/images/portfolio/${portfolio.slug}/home.jpg`}
              className="object-cover w-full h-full object-left-top"
              alt={portfolio.title}
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
