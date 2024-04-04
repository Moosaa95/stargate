import Link from "next/link";

const WhyChooseStargate = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-blue-300 py-16 mb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Join Us on This Journey</h2>
          <p className="text-lg text-gray-800 mb-8">
            Embark on a transformative journey with Stargate Academy. Our admission process is designed to be as welcoming and inclusive as our Academy community. Whether you're seeking a place for academic rigor, spiritual growth, or extracurricular excellence, you'll find your path here.
          </p>
          <div className="flex justify-center mb-8">
            <Link href="/admission" className="bg-gray-90 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">Apply Now</Link>
          </div>
          <p className="text-lg text-gray-800 mb-8">
            <span className="font-bold">A Future Bright with Possibility:</span> Every day, we open gates to new opportunities, learning experiences, and paths to success for our students. We invite you to become a part of our story, where every student is a star, ready to shine bright and open doors to their future.
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-bold">Visit Us Today:</span> Discover more about our programs, our people, and our passion. Explore our site, meet our family, and see for yourself how Stargate Academy is not just another school, but a launchpad for lifelong success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseStargate;
