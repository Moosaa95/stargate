import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative bg-cover bg-center py-16 mt-[50px]">
      {/* Background Image */}
      <div className="absolute mt-[50px] inset-0 opacity-50 bg-gray-900 z-0 h-[10vh] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black uppercase mb-4">About Stargate Academy</h2>
            <p className="text-lg text-gray-200">Where academic and spiritual excellence converge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our History and Mission</h3>
              <p className="text-lg text-gray-200">
                Stargate Academy was founded on January 14, 2008, with a clear mission – to offer a nurturing space where students could achieve both academic and spiritual excellence. Since then, we've been dedicated to creating leaders of tomorrow, blending academic rigor with spiritual depth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision and Core Principles</h3>
              <p className="text-lg text-gray-200">
                At Stargate Academy, our vision is to foster a community beneficial to all, rooted in the core tenets of Islamic culture while promoting strength, resilience, and a commitment to excellence. Our core principles include discipline with love, community benefit, academic excellence, strength and resilience, and Islamic culture tenets.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Growth and Testimonials</h3>
            <p className="text-lg text-gray-200">
              From our modest start with just two students, Stargate Academy has grown significantly, now offering a comprehensive educational journey from crèche to senior secondary. Our students and alumni are our proudest achievements, embodying the values and principles Stargate stands for. Read what our community has to say about us.
            </p>
            {/* Testimonials section can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;