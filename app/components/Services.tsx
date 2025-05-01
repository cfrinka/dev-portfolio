import React from "react";

const services = [
  {
    id: 1,
    title: "Fullstack Web Development",
    description:
      "Building responsive, performant web applications with React, Next.js, Vue.js, and Node.js.",
  },
  {
    id: 2,
    title: "Legacy System Modernization",
    description:
      "Refactoring outdated systems into scalable, maintainable architectures with modern tech stacks.",
  },
  {
    id: 3,
    title: "API & System Integration",
    description:
      "Seamlessly connecting third-party APIs, authentication systems, and real-time data services.",
  },
  {
    id: 4,
    title: "UI/UX Implementation",
    description:
      "Collaborating with designers to create accessible, user-friendly interfaces with Styled Components and Material UI.",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Optimizing database queries, backend services, and frontend performance for faster user experiences.",
  },
  {
    id: 6,
    title: "Automated Testing",
    description:
      "Ensuring robust applications with React Testing Library and 95%+ code coverage.",
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
