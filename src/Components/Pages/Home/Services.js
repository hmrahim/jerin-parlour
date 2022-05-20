import React from "react";
import serviceimg1 from "../../../image/Icon/service1.png";
import serviceimg2 from "../../../image/Icon/service2.png";
import serviceimg3 from "../../../image/Icon/service3.png";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const services = [
    {
      title: "Anti Age Face Treatment",
      price: "199",
      shortDesc:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      logo: serviceimg1,
    },
    {
      title: "Hair Color & Styleing",
      price: "99",
      shortDesc:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      logo: serviceimg2,
    },
    {
      title: "Skin Care Treatment",
      price: "299",
      shortDesc:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      logo: serviceimg3,
    },
  ];
  return (
    <section className="mt-10 flex justify-center items-center flex-col">
      <h1 className="text-3xl py-3 font-bold text-accent text-center">
        Our Awesome <span className="text-primary"> Services</span>
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <h1 className="text-xl  text-base-100 mt-5 text-center btn btn-primary">Explore More</h1>
    </section>
  );
};

export default Services;
