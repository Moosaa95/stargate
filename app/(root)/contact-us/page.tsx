// "use client"
// import {motion} from "framer-motion"
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


// const location = {
//   lat: 9.145, // Example latitude, replace with actual location
//   lng: 7.462, // Example longitude, replace with actual location
// };
// const ContactPage: React.FC = () => {
//   return (
//     <section className="container mx-auto py-16 px-4">
//       <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//         Contact Us
//       </h2>
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-8 mb-12">
//           <h3 className="text-2xl font-bold mb-4">School Information</h3>
//           <p className="text-gray-700 mb-4">
//             Stargate Academy is committed to providing high-quality education and fostering a nurturing environment for our students. 
//             Contact us today to learn more about our programs and offerings.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Address</h4>
//               <p className="text-gray-700"> phase iv, kubwa</p>
//               <p className="text-gray-700">Fct Abuja</p>
//               <p className="text-gray-700">Nigeria</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Phone</h4>
//               <p className="text-gray-700">+2349096207858</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Email</h4>
//               <p className="text-gray-700">stargateexcellencehub@gmail.com</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
//               <p className="text-gray-700">Monday - Friday: 8:00am - 5:00pm</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h3 className="text-2xl font-bold mb-4">Our Location</h3>
//           <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker position={[location.lat, location.lng]}>
//               <Popup>Stargate Academy is here. Visit us!</Popup>
//             </Marker>
//           </MapContainer>
//         </div>
    //     <div className="bg-white rounded-lg shadow-md p-8">
    //       <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
    //       <motion.form
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    // >
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //     <div>
    //       <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
    //         Your Name
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         className="form-input w-full mt-1 focus:ring-blue-500 focus:border-blue-500 block rounded-md"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //         Your Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         className="form-input w-full mt-1 focus:ring-blue-500 focus:border-blue-500 block rounded-md"
    //       />
    //     </div>
    //   </div>
    //   <div className="mt-4">
    //     <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
    //       Message
    //     </label>
    //     <textarea
    //       id="message"
    //       name="message"
    //       rows={4}
    //       className="form-textarea mt-1 block w-full focus:ring-blue-500 focus:border-blue-500 rounded-md"
    //     />
    //   </div>
    //   <div className="mt-6">
    //     <button
    //       type="submit"
    //       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    //     >
    //       Send Message
    //     </button>
    //   </div>
    // </motion.form>
    //     </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
"use client"
// import {motion} from "framer-motion"
// import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/components/map/MapComponent'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

interface Location {
  lat: number;
  lng: number;
}

const location: Location = {
  lat: 9.160199002113098,
  lng: 7.344383077243022,
  
};

const ContactPage: FC = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-90">
        Contact Us
      </h2>
      <div className="max-w-4xl mx-auto">
        <SchoolInformation />
        <MapSection location={location} />
        <ContactForm />
      </div>
    </section>
  );
};

const SchoolInformation: FC = () => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">School Information</h3>
          <p className="text-gray-700 mb-4">
            Stargate Academy is committed to providing high-quality education and fostering a nurturing environment for our students. 
            Contact us today to learn more about our programs and offerings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Address</h4>
              <p className="text-gray-700"> phase iv, kubwa</p>
              <p className="text-gray-700">Fct Abuja</p>
              <p className="text-gray-700">Nigeria</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-gray-700">+2349096207858</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-gray-700">stargateexcellencehub@gmail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
              <p className="text-gray-700">Monday - Friday: 8:00am - 5:00pm</p>
            </div>
          </div>
  </div>
);

interface MapSectionProps {
  location: Location;
}

const MapSection: FC<MapSectionProps> = ({ location }) => (
  <div className="bg-white rounded-lg shadow-md p-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-90">Our Location</h3>
    <MapWithNoSSR location={location} />
  </div>
);

const ContactForm: FC = () => (
  <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-90">Contact Form</h3>
          <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input w-full mt-1 focus:ring-blue-500 focus:border-blue-500 block rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input w-full mt-1 focus:ring-blue-500 focus:border-blue-500 block rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="form-textarea mt-1 block w-full focus:ring-blue-500 focus:border-blue-500 rounded-md"
        />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  </div>
);

export default ContactPage;
