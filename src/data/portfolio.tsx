import { StaticImageData } from "next/image";

import eternitech from "../../public/images/eternitech.png";
import weanim8 from "../../public/images/weanim8.png";
import leadsSupport from "../../public/images/leads-support.png";
import anyonlinetool from "../../public/images/anyonlinetool.png";

export type PortfolioItem = {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    imageWidth: string;
    slug: string;
};

export const portfolioItems: PortfolioItem[] = [
    {
        id: "p1",
        title: "Eternitech",
        description: "WordPress website for a tech startup.",
        image: eternitech,
        imageAlt: "Eternitech Website Screenshot",
        imageWidth: "w-[90%] sm:w-[75%]",
        slug: "eternitech",
    },
    {
        id: "p2",
        title: "WeAnim8",
        description: "WordPress website for an animation studio.",
        image: weanim8,
        imageAlt: "WeAnim8 Website Screenshot",
        imageWidth: "w-[75%] sm:w-[63%]",
        slug: "weanim8",
    },
    {
        id: "p3",
        title: "Leads Support",
        description: "Laravel website for CRM and lead management.",
        image: leadsSupport,
        imageAlt: "Leads Support Website Screenshot",
        imageWidth: "w-[85%] sm:w-[70%]",
        slug: "leads-support",
    },
    {
        id: "p4",
        title: "AnyOnlineTool",
        description: "Laravel website for online tools.",
        image: anyonlinetool,
        imageAlt: "AnyOnlineTool Website Screenshot",
        imageWidth: "w-[82%] sm:w-[67%]",
        slug: "anyonlinetool",
    },
];
