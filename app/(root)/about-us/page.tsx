import About from '@/components/Home/About';
import Story from '@/components/Home/Story';
import Testimonial from '@/components/Home/Testimonial';
import Values from '@/components/Home/Values';
import Image from 'next/image';

const AboutUs = () => {
  const AboutContent = {
    title: "Discover Stargate Academy",
    text_one: "Stargate Excellence Academy was established in 2008, formerly known as True Point Academy. It's situated in phase iv, kubwa, Abuja.The institution started from creche with the special grace of Almighty Allah (SWT) as at today, the school is having classes from Nursery, primary, Junior secondary and Senior Secondary the Academy has secured the Government approval for the BECE and SSCE since 2015&2018 respectively",
    text_two: "Our story is one of perseverance, dedication, and the relentless pursuit of excellence, not just in academics but in the moral and spiritual development of every child entrusted to our care."
    
   }

   const testimonialData = [
    { id: 1, userType: "student", image: "/assets/images/student1.jpg", name: "Yahaya Abdullahi", text: "Stargate Academy has been an incredible journey for me. The supportive environment and dedicated teachers have helped me excel academically and grow as an individual. I'm grateful for the opportunities and experiences I've gained here." },
    { id: 2, userType: "parent", image: "/assets/images/parent1.jpg", name: "Jane Smith", text: "Choosing Stargate Academy for my child has been one of the best decisions I've made. The holistic approach to education, coupled with a strong emphasis on character development, has made a significant impact on my child's academic performance and personal growth." },
    { id: 3, userType: "parent", image: "/assets/images/parent2.jpg", name: "David Johnson", text: "As a parent, I couldn't be happier with the quality of education and care my child receives at Stargate Academy. The dedicated staff, innovative teaching methods, and focus on individualized learning have exceeded my expectations. I highly recommend this school to any parent seeking a nurturing and enriching educational experience for their child." },
    { id: 4, userType: "student", image: "/assets/images/student2.jpg", name: "Fatima Aliyu", text: "My time at Stargate Academy has been nothing short of amazing. The challenging curriculum, coupled with a supportive community, has helped me discover my strengths and pursue my passions. I'm grateful for the lifelong friendships and memories I've made here." },
    { id: 5, userType: "student", image: "/assets/images/student3.jpg", name: "Samuel Adekunle", text: "Attending Stargate Academy has been a transformative experience for me. The opportunities for personal and academic growth are endless, and the inclusive environment has helped me thrive both inside and outside the classroom. I'm proud to be part of such a dynamic and inspiring community." },
    { id: 6, userType: "parent", image: "/assets/images/parent3.jpg", name: "Aisha Mohammed", text: "Stargate Academy has exceeded my expectations in every aspect. From the rigorous academic curriculum to the extracurricular activities offered, my child has had the opportunity to explore and excel in various areas. The caring and dedicated teachers have played a pivotal role in my child's success, and I'm grateful for the positive impact this school has had on our family." }
];


  return (
    <section className="relative bg-cover bg-center py-16 mt-[50px]">
      <About {...AboutContent} />
      <Values />
      <Story />
      <div className="mt-8 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-90 mb-4">Our Growth and Testimonials</h3>
          <p className="text-lg text-center px-6 mx-12 text-gray-900">
            From our modest start with just two students, Stargate Academy has grown significantly, now offering a comprehensive educational journey from crèche to senior secondary. Our students and alumni are our proudest achievements, embodying the values and principles Stargate stands for. Read what our community has to say about us.
          </p>
          <Testimonial testimonials={testimonialData} />

          {/* Testimonials section can be added here */}
        </div>
      {/* Background Image */}
      {/* <div className="absolute mt-[40px] inset-0 opacity-50 bg-gray-900 z-0 h-[10vh] bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}

      {/* Content */}
      <div className="container relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-black uppercase mb-4">About Stargate Academy</h2>
    <p className="text-lg text-gray-900">Where academic and spiritual excellence converge</p>
  </div> */}

  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our History and Mission</h3>
        <p className="text-lg text-gray-900">
          Stargate Academy was founded on January 14, 2008, with a clear mission – to offer a nurturing space where students could achieve both academic and spiritual excellence. Since then, we've been dedicated to creating leaders of tomorrow, blending academic rigor with spiritual depth.
        </p>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision and Core Principles</h3>
        <p className="text-lg text-gray-900">
          At Stargate Academy, our vision is to foster a community beneficial to all, rooted in the core tenets of Islamic culture while promoting strength, resilience, and a commitment to excellence. Our core principles include discipline with love, community benefit, academic excellence, strength and resilience, and Islamic culture tenets.
        </p>
      </div>
    </div>
  </div> */}



          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
