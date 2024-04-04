import Link from "next/link";

const EducationPhilosophyAndEnrollment = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-90">Our Educational Philosophy</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our approach to education is rooted in the belief that every child has the potential to excel. We combine rigorous academic standards with a supportive atmosphere, encouraging students to challenge themselves and strive for excellence. By involving parents and community partners, we ensure that education is a collaborative effort, preparing our students not just for exams, but for life.
            </p>
            <h2 className="text-3xl font-bold mb-8 text-gray-90">Enroll in Our Academic Programs</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover the difference a Stargate education can make. Our academic programs are designed to challenge, inspire, and prepare students for a bright future. Join us and embark on a journey of academic excellence, personal growth, and spiritual development. Welcome to Stargate Academy, where every student is a star, ready to shine.
            </p>
            <Link href="/admission" className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300">Enroll Now</Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default EducationPhilosophyAndEnrollment;
  