// components/ContactUs.tsx

const ContactUs = () => {
    return (
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Get in touch with Stargate Academy</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-lg text-gray-800">
                Stargate Academy is located in [Your Address], [Your City]. Feel free to visit us during our office hours to meet our staff and take a tour of our facilities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-lg text-gray-800">
                <strong>Phone:</strong> [Your Phone Number]<br />
                <strong>Email:</strong> [Your Email Address]<br />
                <strong>Address:</strong> [Your Physical Address]<br />
              </p>
            </div>
          </div>
  
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            {/* Add a contact form component here */}
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  