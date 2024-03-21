// components/TahfeezProgram.tsx

const TahfeezProgram = () => {
    return (
      <div className="py-16 bg-white">
        {/* Tahfeez Program content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Tahfeez Program: Nurturing Spiritual Growth</h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Program Structure */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Program Structure</h3>
              <p className="text-gray-600 mb-4">
                The Tahfeez program is thoughtfully scheduled to complement our standard academic curriculum, allowing students to pursue their spiritual education without compromising their academic pursuits.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">After-Academy Hours: The program runs from the end of the normal Academy day, Mondays to Thursdays, providing a convenient schedule for our students to participate without conflict with their regular studies.</li>
                <li className="text-gray-600">Saturday Classes: Recognizing the importance of dedicated time for more intensive study, the Tahfeez program also includes full-day classes on Saturdays from 9 am to 4 pm. This extended session allows for deeper engagement and more personalized instruction in Quranic recitation and Islamic studies.</li>
              </ul>
            </div>
  
            {/* Curriculum Highlights */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Curriculum Highlights</h3>
              <p className="text-gray-600 mb-4">
                The Tahfeez program covers essential aspects of Islamic teachings, including Quranic recitation and basics of Aqidah, Fiqh, and Seerah, providing students with a well-rounded understanding of their faith.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Quranic Recitation: Students learn to recite the Quran with proper Tajweed, emphasizing pronunciation and articulation, to foster a profound connection with the words of Allah.</li>
                <li className="text-gray-600">Islamic Foundations: Alongside recitation, the program covers essential aspects of Islamic teachings, including the basics of Aqidah, Fiqh, and Seerah, providing students with a well-rounded understanding of their faith.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TahfeezProgram;
  