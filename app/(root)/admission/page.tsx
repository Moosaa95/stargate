import React from 'react';

const Admissions: React.FC = () => {
  const steps = [
    "Inquiry and Academy Visit",
    "Application Submission",
    "Required Documents",
    "Placement Test",
    "Admission Interview",
    "Admission Decision",
    "Enrollment"
  ];

  const requirements = [
    "Age Requirements: Please refer to our age guidelines for each grade level, available on our website or from our admissions office.",
    "Academic Records: Previous academic records are reviewed to ensure students can benefit from our curriculum.",
    "Placement Test: Assessment in English, Mathematics, and for older students, Science, to gauge academic level and readiness.",
    "Interview: A personal interview to understand the student's and family's educational expectations and values."
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <div className='bg-img-1 bg-cover'></div>
      <h2 className="text-4xl font-bold text-center mt-12 text-gray-90">
        Admissions at Stargate Academy: Your Pathway to Excellence
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Step-by-Step Admission Process</h3>
          {steps.map((step, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold mb-2 text-gray-90">{`${index + 1}. ${step}`}</h4>
              {index === 2 ? (
                <ul className="list-disc pl-6">
                  <li>{requirements[0]}</li>
                  <li>{requirements[1]}</li>
                  <li>{requirements[2]}</li>
                  <li>{requirements[3]}</li>
                </ul>
              ) : (
                <p className="text-gray-700">
                  {index === 3 ? "Applicants for primary, junior secondary, and senior secondary levels are required to sit for a placement test. This helps us understand your child's academic strengths and areas for growth, ensuring they are placed in the appropriate grade level." : null}
                  {index === 4 ? "Parents and students may be invited for an interview with the Admissions Committee. This is an opportunity for us to get to know your family better and for you to ask any questions you may have about our Academy." : null}
                  {index === 6 ? "To complete the enrollment process, parents are required to submit the signed acceptance of admission offer and pay the tuition deposit. This deposit is credited against the first term's tuition fees." : null}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Why Choose Stargate Academy?</h3>
          <p className="text-gray-700">
            Choosing Stargate Academy means selecting a nurturing environment where your child can grow academically, spiritually, and socially. Our balanced curriculum, state-of-the-art facilities, and dedicated faculty ensure that we cater to the holistic development of every student. Join us, and become part of a community that values excellence, discipline, and integrity.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
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
