import React from 'react';

const Admissions: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className='bg-img-1 bg-cover'></div>
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-90">
        Admissions at Stargate Academy: Your Pathway to Excellence
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Step-by-Step Admission Process</h3>
          {[...Array(7).keys()].map((step) => (
            <div key={step} className="mb-6">
              <h4 className="text-lg font-bold mb-2">{step + 1}. Step Title</h4>
              <p className="text-gray-700">
                Step Description
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Admission Requirements</h3>
          {[...Array(4).keys()].map((requirement) => (
            <div key={requirement} className="mb-4">
              <h4 className="text-lg font-bold mb-2">Requirement Title</h4>
              <p className="text-gray-700">
                Requirement Description
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Tuition and Fees</h3>
          <p className="text-gray-700">
            Tuition and fees at Stargate Academy are structured to provide the highest quality education and resources for our students. For a detailed breakdown of tuition costs, additional fees, and payment options, please visit our website or contact the admissions office.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Why Choose Stargate Academy?</h3>
          <p className="text-gray-700">
            Choosing Stargate Academy means selecting a nurturing environment where your child can grow academically, spiritually, and socially. Our balanced curriculum, state-of-the-art facilities, and dedicated faculty ensure that we cater to the holistic development of every student. Join us, and become part of a community that values excellence, discipline, and integrity.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Ready to Start Your Journey?</h3>
          <p className="text-gray-700">
            We are excited to welcome you to the Stargate Academy family. For more information, to schedule a visit, or to begin the application process, please contact our Admissions Office. Let us embark on this educational journey together, paving the way for your child's successful future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
