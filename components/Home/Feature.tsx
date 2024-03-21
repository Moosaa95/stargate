import React from "react";

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured News & Events</h2>
          <p className="text-lg text-gray-700 text-center">
            Stay updated with our latest achievements and upcoming events. From inter-Academy
            competitions to community service projects, Stargate students are always on the move,
            making a difference.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Call to Action</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Ready to be a part of our dynamic community? Click{" "}
            <span className="text-blue-500 cursor-pointer underline">"Apply Now"</span> to start
            your journey or{" "}
            <span className="text-blue-500 cursor-pointer underline">"Learn More"</span> to dive
            deeper into what makes Stargate Academy the right choice for your family.
          </p>
          {/* Add onClick handlers for Apply Now and Learn More buttons */}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Vision in Action</h2>
          <p className="text-lg text-gray-700 mb-8">
            <strong>Academic and Spiritual Excellence:</strong> Our core principles guide
            everything we do, from the classroom to the community. Discipline, integrity, and
            resilience are not just ideals but daily practices, woven into the fabric of our Academy
            life. We believe in the power of education to transform lives, fostering strength,
            character, and a commitment to excellence in our students.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            <strong>Diverse Programs for Holistic Development:</strong> From play-based learning in
            our crèche and nursery programs to interactive and personalized instruction in our
            primary and secondary levels, we cater to each child's unique needs. Our extracurricular
            offerings, including the Press Club, Jet Club, and various sports, ensure that every
            student finds their passion and pursues it with vigor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
