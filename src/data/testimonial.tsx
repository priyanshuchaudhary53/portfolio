export type Testimonial = {
  id: number;
  name: string;
  title?: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  company?: {
    name: string;
    link: string;
    logo: {
      url: string;
      alt: string;
    };
  };
};

export const Testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Volkan Kaya",
    title: "Founder, Versoly",
    description:
      "“Great freelancer, I tested 40 of them and Priyanshu was the only one that passed the vetting process. I have already recommended him to friends and customers who similarly had good experiences.”",
    image: {
      url: "/images/testimonial/volkan-kaya.jpg",
      alt: "Volkan Kaya",
    },
    company: {
      name: "Versoly",
      link: "https://versoly.com/",
      logo: {
        url: "/images/testimonial/versoly-logo.png",
        alt: "Versoly Logo",
      },
    },
  },
  {
    id: 2,
    name: "Shahar Albag",
    title: "Founder & CEO, Eternitech",
    description:
      "“Priyanshu is a great developer and a pleasure to work with. He's very professional and always delivers on time. I would highly recommend him to anyone looking for a skilled developer.”",
    image: {
      url: "/images/testimonial/shahar-albag.jpg",
      alt: "Shahar Albag",
    },
    company: {
      name: "Eternitech",
      link: "https://eternitech.com/",
      logo: {
        url: "/images/testimonial/eternitech-logo.png",
        alt: "Eternitech Logo",
      },
    },
  },
  {
    id: 3,
    name: "Dmitry  Kolyadyuk",
    description:
      "“Priyanshu is very attentive to the details and follows the instructions very precisely which is rare and very valuable. Great communication, high level of productivity.”",
    image: {
      url: "/images/testimonial/dmitry-kolyadyuk.jpg",
      alt: "Dmitry Kolyadyuk",
    },
  },
];
