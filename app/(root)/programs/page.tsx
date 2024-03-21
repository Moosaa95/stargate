const AcademicPrograms = () => {
    return (
      <div className="py-16 bg-gray-100">
        {/* Academic Programs content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Academic Programs at Stargate Academy: A Pathway to Excellence</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Early Years */}
            <div className="border border-gray-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Early Years: Crèche and Nursery</h3>
              <p className="text-gray-600 mb-4">
                Our early years program focuses on play-based learning and interactive activities, laying the foundation for a lifelong love of learning.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Play-Based Learning: Through play, children develop essential cognitive, social, and emotional skills.</li>
                <li className="text-gray-600">Interactive Activities: Our curriculum includes music, art, and movement, encouraging creativity and self-expression.</li>
              </ul>
            </div>
  
            {/* Primary Academy */}
            <div className="border border-gray-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Primary Academy: Building Blocks of Education</h3>
              <p className="text-gray-600 mb-4">
                As students progress to our primary Academy, they encounter a more structured yet flexible curriculum designed to spark curiosity and foster academic excellence.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Holistic Development: We focus on the development of the whole child, including academic skills, personal growth, and social responsibility.</li>
                <li className="text-gray-600">Personalized Attention: Recognizing that each child learns differently, we offer personalized support, especially for slow learners, ensuring that all students have the tools they need to succeed.</li>
              </ul>
            </div>
  
            {/* Secondary Academy */}
            <div className="border border-gray-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Secondary Academy: Preparing for the Future</h3>
              <p className="text-gray-600 mb-4">
                Our secondary Academy program is divided into junior and senior sections, each tailored to prepare students for the challenges and opportunities ahead.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Junior Secondary: Students are introduced to a broad range of subjects, fostering a well-rounded education.</li>
                <li className="text-gray-600">Senior Secondary: Specialization in science, arts, or commercial subjects allows students to pursue their interests and prepare for university and beyond.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AcademicPrograms;
  