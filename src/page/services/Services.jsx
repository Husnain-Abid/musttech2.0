import { Link, useParams } from "react-router-dom";
import HeroSection from "../../component/ui/HeroSection";
import Content from "../../component/ui/Content";
import ReasonSection from "../../component/ReasonSection";
import ServiceCard from "../../component/ui/ServiceCard";
import Card from "../../component/ui/Card";

// Centralized data for services
const servicesData = {
  "web-development": {
    data: {
      slug: "web-development",
      page: "Web Development",
      title: "Find your niche",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "Process",
      description: `Our web development process is designed to bring your vision to life with precision and innovation. We start by understanding your goals, audience, and functionality needs, ensuring the foundation is tailored to your unique requirements.<br/>
Next, our team designs intuitive, visually stunning layouts that prioritize user experience and responsiveness. From wireframes to prototypes, every step is crafted to ensure a seamless flow and engaging interaction.<br/>
Once the design is finalized, our developers build a robust, scalable, and fast-performing website using the latest technologies. We rigorously test every element, ensuring compatibility, security, and optimization for all devices.<br/>
The result? A website that not only looks incredible but functions flawlessly—designed to engage, convert, and grow alongside your business.`,
    },
    projects: [
      {
        title: "SAS Web Development",
        category: "Website",
        image: "/serviceDetails/web1",
      },
      {
        title: "MustTech Web Development",
        category: "Website",
        image: "/serviceDetails/web2",
      },
      {
        title: "ArtGarage Web Development",
        category: "Website",
        image: "/serviceDetails/web3",
      },
    ],
    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo5",
        title: "SEO",
        description:
          "We optimize your online presence to ensure you stand out and rank high where it matters most.",
        to: "/services/seo",
      },
      {
        icon: "logo6",
        title: "Customer services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/custom-service",
      },
    ],
  },

  "mobile-app": {
    data: {
      slug: "mobile-app",
      page: "Mobile App",
      title: "Find your niche",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color2: "#EC2027",
      color1: "#FFF",
    },
    content: {
      title: "Process",
      description: `Our mobile app development process combines innovation, user-centric design, and cutting-edge technology. We start by understanding your vision and goals, ensuring the app aligns with your business needs and user expectations.
      <br/>Next, our designers create intuitive interfaces that prioritize seamless navigation and an engaging user experience. Meanwhile, our developers build a robust and scalable backend, ensuring the app performs flawlessly across all devices.
      <br/>We rigorously test the app for functionality, security, and performance, refining every detail before launch. Post-launch, we provide ongoing support and updates to keep your app ahead in a rapidly evolving digital landscape.
      <br/>With our process, we don’t just build apps; we create solutions that connect, engage, and empower your audience.`,
    },
    projects: [
      {
        title: "SAS Mobile Development",
        category: "Website",
        image: "/serviceDetails/mobile1",
      },
      {
        title: "MustTech Mobile Development",
        category: "Website",
        image: "/serviceDetails/mobile2",
      },
      {
        title: "ArtGarage Mobile Development",
        category: "Website",
        image: "/serviceDetails/mobile3",
      },
    ],
    services: [
      {
        icon: "logo1",
        title: "Branding",
        description:
          "We shape identities that speak volumes, leaving impressions that stand the test of time.",
        to: "/services/branding",
      },
      {
        icon: "logo2",
        title: "Web development",
        description:
          "Forging digital landscapes where connections thrive and visions come to life.",
        to: "/services/web-development",
      },
      {
        icon: "logo3",
        title: "Digital marketing",
        description:
          "We craft strategies that make your brand unforgettable in the digital world.",
        to: "/services/digital-marketing",
      },
    ],
  },

  branding: {
    data: {
      slug: "branding",
      page: "Branding",
      title: "Find your niche",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "Process",
      description: `Our branding process is a journey of discovery, creativity, and precision. We begin by understanding your story, values, and goals, ensuring we capture the essence of what makes your brand unique. Through in-depth research, we identify your target audience and market positioning, laying the foundation for a strong brand identity.
<br/>Next, our creative team gets to work, designing logos, visuals, and messaging that reflect your brand’s personality and resonate with your audience. We focus on consistency, ensuring every element—from colors to typography—aligns seamlessly across all platforms.
<br/>Finally, we refine and implement, turning ideas into impactful branding that leaves a lasting impression. With our process, your brand becomes more than a name—it becomes a story that connects, inspires, and stands out in the marketplace.`,
    },
    projects: [
      {
        title: "SAS Logistics Branding",
        category: "Website",
        image: "/serviceDetails/brand1",
      },
      {
        title: "MustTech Branding",
        category: "Website",
        image: "/serviceDetails/brand2",
      },
      {
        title: "ArtGarage Branding",
        category: "Website",
        image: "/serviceDetails/brand3",
      },
    ],
    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
          to: "/services/mobile-app",
        },
      {
        icon: "logo5",
        title: "SEO",
        description:
          "We optimize your online presence to ensure you stand out and rank high where it matters most.",
          to: "/services/seo",
        },
      {
        icon: "logo6",
        title: "Customer services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
          to: "/services/custom-service",
        },
    ],
  },

  "digital-marketing": {
    data: {
      slug: "digital-marketing",
      page: "Digital Marketing",
      title: "Find your niche",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color2: "#EC2027",
      color1: "#FFF",
    },
    content: {
      title: "Process",
      description: `Our digital marketing process is rooted in strategy, creativity, and data-driven insights. We begin by understanding your business goals, target audience, and market dynamics to craft a personalized plan.
<br/>From there, we design impactful campaigns that span social media, search engines, email, and beyond—each tailored to drive engagement and deliver measurable results.
<br/>We continuously monitor performance, using advanced analytics to refine and optimize every aspect of your strategy. This ensures your brand not only reaches the right audience but also stays ahead in an ever-evolving digital landscape.
<br/>With our process, digital marketing becomes more than promotion—it becomes a powerful tool for growth and connection.`,
    },
    projects: [
      {
        title: "SAS Logistics Marketing",
        category: "Website",
        image: "/serviceDetails/digi1",
      },
      {
        title: "MustTech Marketing",
        category: "Website",
        image: "/serviceDetails/digi2",
      },
      {
        title: "ArtGarage Marketing",
        category: "Website",
        image: "/serviceDetails/digi3",
      },
    ],
    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
          to: "/services/mobile-app",
        },
      {
        icon: "logo5",
        title: "SEO",
        description:
          "We optimize your online presence to ensure you stand out and rank high where it matters most.",
          to: "/services/seo",
        },
      {
        icon: "logo6",
        title: "Customer services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
          to: "/services/custom-service",
        },
    ],
  },

  seo: {
    data: {
      slug: "seo",
      page: "SEO",
      title: "Find your niche",
      description: `Uncover the unique qualities that set your brand apart. Finding your niche is about more than standing out—it’s about connecting with the right audience and delivering value in a way only you can. With our expertise, we’ll help you define your space in the market.`,
      button: "Build my brand",
      color1: "#EC2027",
      color2: "#FFF",
    },
    content: {
      title: "Process",
      description: `Our web development process is designed to bring your vision to life with precision and innovation. We start by understanding your goals, audience, and functionality needs, ensuring the foundation is tailored to your unique requirements.<br/>
Next, our team designs intuitive, visually stunning layouts that prioritize user experience and responsiveness. From wireframes to prototypes, every step is crafted to ensure a seamless flow and engaging interaction.<br/>
Once the design is finalized, our developers build a robust, scalable, and fast-performing website using the latest technologies. We rigorously test every element, ensuring compatibility, security, and optimization for all devices.<br/>
The result? A website that not only looks incredible but functions flawlessly—designed to engage, convert, and grow alongside your business.`,
    },
    projects: [
      {
        title: "SAS Website SEO",
        category: "Website",
        image: "/serviceDetails/seo1",
      },
      {
        title: "MustTech Website SEO",
        category: "Website",
        image: "/serviceDetails/seo2",
      },
      {
        title: "ArtGarage Website SEO",
        category: "Website",
        image: "/serviceDetails/seo3",
      },
    ],
    services: [
      {
        icon: "logo4",
        title: "Mobile App",
        description:
          "We build seamless mobile experiences that keep your users engaged, wherever they go.",
        to: "/services/mobile-app",
      },
      {
        icon: "logo2",
        title: "Web developement",
        description:
          "Forging digital landscapes where connections thrive and visions come to life.",
        to: "/services/web-development",
      },
      {
        icon: "logo6",
        title: "Customer services",
        description:
          "We test and refine your user experience to ensure every interaction is seamless and intuitive.",
        to: "/services/custom-service",
      },
    ],
  },

  // Add other slugs similarly...
};

export default function Services() {
  const { slug } = useParams();

  // Retrieve the data for the current slug
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-10 min-h-[63vh] flex flex-col justify-around">
        <h1 className="text-center text-2xl font-bold text-customred ">
          Service not found
        </h1>
        <div>
          <Link
            to="/"
            className="mt-4 inline-block rounded-full border border-customred px-6 py-3 text-sm font-medium text-customred hover:bg-customred hover:text-white"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const { data, content, projects, services } = service;

  return (
    <div>
      <HeroSection data={data} />

      <section className="bg-[#0F0F0F]  container mx-auto px-6 py-10 lg:py-[58px]">
        <div className="max-w-4xl space-y-10 lg:space-y-20">
          <Content data={content} />
        </div>
      </section>

      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <h3 className="mb-8 text-customred font-bold text-2xl lg:text-3xl">
          {data.page} Work
        </h3>
        <div className="mt-5 mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ServiceCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-[#0F0F0F] container mx-auto px-6 py-10 lg:py-[58px]">
        <h3 className="mb-8 text-white font-bold text-2xl lg:text-3xl">
          Other Services
        </h3>
        <div className="mt-5 mb-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
        <Link
          to="/"
          className="inline-block rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
        >
          Go to Home
        </Link>
      </section>

      <ReasonSection />
    </div>
  );
}
