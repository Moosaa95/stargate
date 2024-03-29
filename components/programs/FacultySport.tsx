import Image from "next/image";

const SectionHeader = ({ title }: { title: string }) => {
  return <h2 className="text-3xl font-bold mb-4 text-gray-90">{title}</h2>;
};

const SubSection = ({
  title,
  imageSrc,
  altText,
  description,
  items,
}: {
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
  items: string[];
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-90">{title}</h3>
      <div className="flex justify-center mb-4">
        <div className="w-74 h-74 relative rounded-lg overflow-hidden">
          <Image src={imageSrc} alt={altText} width={400} height={200} />
        </div>
      </div>
      <p className="text-gray-700 mb-4 font-[400]">{description}</p>
      <ul className="text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19 5a1 1 0 00-1-1h-4.586A2.998 2.998 0 0012 0c-.265 0-.52.027-.767.078a3.002 3.002 0 00-2.468 2.468A3.002 3.002 0 006.586 0H2a1 1 0 00-1 1v14a1 1 0 001 1h3a1 1 0 110 2H2a3 3 0 01-3-3V2a2.99 2.99 0 012-2.828V6a1 1 0 102 0V2h10v2a1 1 0 102 0V2h1a1 1 0 011 1zm-1 5a1 1 0 00-1 1v6a1 1 0 11-2 0v-4H8a1 1 0 100 2h7a1 1 0 011 1v4a1 1 0 11-2 0v-3H9a1 1 0 100 2h4a1 1 0 010 2H8a3 3 0 01-3-3v-6a3 3 0 013-3h10z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FacultyAndExtracurricular = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Faculty Section */}
          <div className="mb-12">
            <SectionHeader title="Faculty: Our Pillars of Strength" />
            <SubSection
              title="Clubs and Societies"
              imageSrc="/assets/images/stargate1.jpg"
              altText="Faculty"
              description="Our teaching staff is our greatest asset, bringing a wealth of knowledge, experience, and passion to the classroom."
              items={[
                "Inspiring educators who foster a love for learning.",
                "Dedicated mentors guiding students to reach their full potential.",
                "Continuous professional development to stay updated with the latest teaching practices.",
              ]}
            />
          </div>

          {/* Extracurricular Activities Section */}
          <div>
            <SectionHeader title="Extracurricular Activities: Beyond the Classroom" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Clubs and Societies */}
              <div className="col-span-2">
                <SubSection
                  title="Clubs and Societies"
                  imageSrc="/assets/images/stargate4.jpg"
                  altText="Clubs and Societies"
                  description="At Stargate Academy, we believe in the importance of a well-rounded education."
                  items={[
                    "Press Club: Express your creativity through journalism.",
                    "Jet Club: Explore the wonders of aviation.",
                    "Farmers Club: Connect with nature and learn sustainable practices.",
                    "Home Makers: Cultivate life skills and foster a sense of community.",
                  ]}
                />
              </div>
              {/* Sports */}
              <div className="col-span-2">
                <SubSection
                  title="Sports"
                  imageSrc="/assets/images/football.jpg"
                  altText="Sports"
                  description="We offer a variety of sports, promoting physical health and team spirit."
                  items={[
                    "Football: Kick-start your passion for teamwork and strategy.",
                    "Table Tennis: Sharpen your reflexes and agility.",
                    "Basketball: Reach new heights and strengthen camaraderie.",
                    "Athletics: Run, jump, and compete to unleash your potential.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyAndExtracurricular;
