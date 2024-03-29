import AcademicProgramsSection from "@/components/programs/Academic";
import EducationPhilosophyAndEnrollment from "@/components/programs/Education";
import FacultyAndExtracurricular from "@/components/programs/FacultySport";

const AcademicPrograms = () => {
    return (
      <section className="relative bg-cover bg-center py-16 mt-[50px]">
        <AcademicProgramsSection />
        <FacultyAndExtracurricular />
        <EducationPhilosophyAndEnrollment />
      </section>
    );
  };
  
  export default AcademicPrograms;
  