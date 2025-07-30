import React from "react";

// Replace with actual images and links if needed
const teamMembers = [
  {
    name: "Jane Doe",
    title: "CEO",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
  {
    name: "John Smith",
    title: "CTO",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
  {
    name: "Alice Johnson",
    title: "COO",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
  {
    name: "Bob Brown",
    title: "CFO",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
];

const AboutUs = () => (
  <main>
    {/* About Us Hero Section */}
    <section className="pt-32 pb-20 relative">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight">
          We're a Team of Thinkers, Builders, and Partners.
        </h1>
        <p className="font-inter text-lg text-brand-light-gray mt-6 max-w-3xl mx-auto">
          Kynyx Solutions was founded on a simple idea: to build a digital
          agency that's less about transactions and more about partnerships.
          We're a US-based company dedicated to helping businesses navigate the
          complexities of the digital world with a team they can trust.
        </p>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-20 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="./our-journey-image.png"
              alt="An abstract graphic representing the journey of Kynyx Solutions"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-poppins font-bold text-4xl text-white mb-4">
              Our Story: From Idea to Impact
            </h2>
            <p className="text-brand-light-gray mb-4">
              Founded in Delaware, Kynyx Solutions started as a small group of
              passionate technologists who saw a gap in the market. Too many
              businesses were struggling with digital agencies that
              overpromised, underdelivered, and communicated poorly. We set out
              to be different.
            </p>
            <p className="text-brand-light-gray">
              Our focus has always been on combining deep technical expertise
              with a human-centric approach. We believe the best digital
              products are born from collaboration, clear communication, and a
              genuine desire to solve real-world problems. Today, we're proud to
              be a trusted partner for companies across the country, helping
              them build the future of their business.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Meet the Team Section */}
    <section className="py-20 bg-brand-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white">
            Meet the Leadership
          </h2>
          <p className="font-inter text-lg text-brand-light-gray mt-4 max-w-2xl mx-auto">
            The passionate individuals guiding our mission to deliver
            excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={`Headshot of ${member.name}`}
                className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-brand-purple"
              />
              <h3 className="font-poppins font-semibold text-xl text-white">
                {member.name}
              </h3>
              <p className="text-brand-cyan">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Our Values Section */}
    <section className="py-20 bg-gradient-to-r from-brand-charcoal to-brand-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight">
            Our Core Values
          </h2>
          <p className="font-inter text-lg text-brand-light-gray mt-4 max-w-2xl mx-auto">
            These principles guide every decision we make and every line of code
            we write.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Value Card */}
          <div className="border bg-gray-400/40 p-8 rounded-lg text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white mb-4">
              Partnership Over Projects
            </h3>
            <p className="text-brand-light-gray text-base">
              We invest in your success for the long term. We act as an
              extension of your team, not just a temporary vendor.
            </p>
          </div>

          {/* Value Card */}
          <div className="border bg-teal-400/40 p-8 rounded-lg text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white mb-4">
              Uncompromising Quality
            </h3>
            <p className="text-brand-light-gray text-base">
              We're obsessed with quality and craftsmanship. Good enough is
              never good enough for us or our clients.
            </p>
          </div>

          {/* Value Card */}
          <div className="border bg-blue-400/40 p-8 rounded-lg text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white mb-4">
              Radical Transparency
            </h3>
            <p className="text-brand-light-gray text-base">
              We believe in clear, honest communication. You'll always know the
              status of your project and the 'why' behind our decisions.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Join Our Team Section */}
    <section className="py-20 bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight">
          Join Our Team
        </h2>
        <p className="font-inter text-lg text-brand-light-gray mt-4 max-w-2xl mx-auto">
          We're always looking for passionate and talented people to join our
          mission. If you love building great things and want to be part of a
          growing US-based software development team, we'd love to hear from
          you.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="border text-brand-cyan font-bold font-poppins py-4 px-10 rounded-lg shadow-lg bg-cyan-800 hover:bg-cyan-500 hover:shadow-xl transition-all duration-300 ease-in-out text-lg"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default AboutUs;
