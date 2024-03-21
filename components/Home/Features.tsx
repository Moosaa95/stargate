// components/FeatureSection.js

const FeatureSection = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Explore What Makes Us Shine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Featured News & Events</h3>
              <p className="text-lg mb-4">Stay updated with our latest achievements and upcoming events. From inter-Academy competitions to community service projects, Stargate students are always on the move, making a difference.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Learn More</button>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Call to Action</h3>
              <p className="text-lg mb-4">Ready to be a part of our dynamic community? Click "Apply Now" to start your journey or "Learn More" to dive deeper into what makes Stargate Academy the right choice for your family.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Apply Now</button>
            </div>
  
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Vision in Action</h3>
              <p className="text-lg mb-4">Academic and Spiritual Excellence: Our core principles guide everything we do, from the classroom to the community.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Read More</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;
  