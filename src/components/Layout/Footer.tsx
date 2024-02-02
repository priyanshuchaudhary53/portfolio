import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-14 lg:mt-20">
      <div className="m-4 px-4 sm:px-6 md:px-10 xl:px-16 rounded-2xl bg-gray-900 dark:bg-neutral-800">
        <div className="py-24 border-b border-white/20">
          <div className="dark:text-gray-400 text-white text-2xl md:text-3xl font-medium text-center md:text-start uppercase tracking-tight">
            Tell us about your project. Let&apos;s collaborate and make great
            stuff.
          </div>
          <div className="flex flex-col xl:flex-row justify-start items-center md:items-start xl:items-center gap-5 mt-10 max-w-full">
            <div className="text-white  text-5xl text-center md:text-left md:text-7xl font-bold tracking-tight break-words w-full xl:w-auto">
              <span className="text-gray-400 ">contact</span>@priyanshuc.dev
            </div>
            <div className=" shrink-0">
              <a
                href="#"
                className="inline-block p-4 rounded-full bg-gray-600 transition-opacity ease-out duration-300 hover:opacity-80"
              >
                <GoArrowUpRight className="text-white w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-base text-gray-400 dark:text-white font-medium text-center md:text-start">
            <span className="font-normal opacity-50">
              ©{year}. Developed by{" "}
            </span>
            Priyanshu
            <span className="font-normal opacity-50"> - Powered by </span>Vercel
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
