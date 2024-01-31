import { GoArrowUpRight } from "react-icons/go";

const ExternalLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <a
      className="uppercase flex gap-3 items-center font-medium transition-opacity ease-out duration-300 text-gray-800 dark:text-white hover:opacity-60"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name} <GoArrowUpRight className="text-2xl" />
    </a>
  );
};

export default ExternalLink;
