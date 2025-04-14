import React from "react";
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and user-friendly websites.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Creating mobile applications for iOS and Android.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces.",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
  },
  {
    id: 5,
    title: "Cloud Services",
    description: "Providing cloud solutions for scalability and reliability.",
  },
];
const Services = () => {
  return (
    <section className="text-white py-20 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">
            Services
          </h2>
        </div>
        <div className="md:w-[75%]">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
