// components/Admissions.tsx

const Admissions = () => {
    return (
      <div className="py-16 bg-gray-100">
        {/* Admissions content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Admissions at Stargate Academy: Your Pathway to Excellence</h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step-by-Step Admission Process */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Admission Process</h3>
              <ol className="list-decimal pl-6">
                <li className="text-gray-600 mb-2">Inquiry and Academy Visit: Begin your journey by scheduling a visit to our campus. This gives you and your child an opportunity to experience the warmth of our community, meet our dedicated staff, and see our facilities firsthand.</li>
                <li className="text-gray-600 mb-2">Application Submission: Fill out the application form available on our website or at our Academy office. Submit the completed form along with the required documents and the non-refundable application fee.</li>
                <li className="text-gray-600 mb-2">Required Documents: Birth Certificate, Transfer Certificate (if applicable), Recent Academic Reports, Passport-sized Photographs</li>
                <li className="text-gray-600 mb-2">Placement Test: Applicants for primary, junior secondary, and senior secondary levels are required to sit for a placement test. This helps us understand your child's academic strengths and areas for growth, ensuring they are placed in the appropriate grade level.</li>
                <li className="text-gray-600 mb-2">Admission Interview: Parents and students may be invited for an interview with the Admissions Committee. This is an opportunity for us to get to know your family better and for you to ask any questions you may have about our Academy.</li>
                <li className="text-gray-600 mb-2">Admission Decision: Following the interview and review of the placement test results, we will communicate our admission decision. Successful candidates will receive an offer letter, which includes details on the next steps to secure your child's place at Stargate Academy.</li>
                <li className="text-gray-600 mb-2">Enrollment: To complete the enrollment process, parents are required to submit the signed acceptance of admission offer and pay the tuition deposit. This deposit is credited against the first term's tuition fees.</li>
              </ol>
            </div>
  
            {/* Admission Requirements */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Admission Requirements</h3>
              <ul className="list-disc pl-6">
                <li className="text-gray-600 mb-2">Age Requirements: Please refer to our age guidelines for each grade level, available on our website or from our admissions office.</li>
                <li className="text-gray-600 mb-2">Academic Records: Previous academic records are reviewed to ensure students can benefit from our curriculum.</li>
                <li className="text-gray-600 mb-2">Placement Test: Assessment in English, Mathematics, and for older students, Science, to gauge academic level and readiness.</li>
                <li className="text-gray-600 mb-2">Interview: A personal interview to understand the student's and family's educational expectations and values.</li>
              </ul>
            </div>
          </div>
  
          {/* Tuition and Fees */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Tuition and Fees</h3>
            <p className="text-gray-600 mb-4">
              Tuition and fees at Stargate Academy are structured to provide the highest quality education and resources for our students. For a detailed breakdown of tuition costs, additional fees, and payment options, please visit our website or contact the admissions office.
            </p>
            <p className="text-gray-600">
              Scholarship Opportunities: We offer scholarships to deserving students, including academic merit scholarships and financial aid for families in need. Special consideration is given to orphans and families facing significant financial challenges.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Admissions;
  