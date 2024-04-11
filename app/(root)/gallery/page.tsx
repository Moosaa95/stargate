// // components/Gallery.tsx

// import Image from 'next/image';

// const Gallery = () => {
//   // Sample image URLs
//   const imageUrls = [
//     '/assets/images/stargate1.jpg',
    // '/assets/images/stargate2.jpg',
    // '/assets/images/stargate3.jpg',
    // '/assets/images/stargate4.jpg',
    // '/assets/images/stargate6.jpg',
    // '/assets/images/stargate5.jpg',
    // '/assets/images/stargate7.jpg',
    // '/assets/images/stargate8.jpg',
    // '/assets/images/stargate9.jpg',
//   ];

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-90">Photo Gallery</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {imageUrls.map((imageUrl, index) => (
//             <div key={index} className="relative overflow-hidden rounded-lg">
//               <Image
//                 src={imageUrl}
//                 alt={`Image ${index + 1}`}
//                 layout="responsive"
//                 width={400}
//                 height={300}
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
"use client"

import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';


interface ImageWithDescription {
  src: string;
  description: string;
}

const Gallery = () => {
  const imageUrls = [
    { src: '/assets/images/stargate1.jpg', description: 'Stagate student celebrating' },
    { src: '/assets/images/stargate-student-performance.jpg', description: 'Stargate Academy Students Performing' },
    { src: '/assets/images/stargate-tahfeez-students.jpg', description: 'Stargate Academy Students Tahfeez Students' },
    { src: '/assets/images/stargate-graduating-students.jpg', description: 'Stargate Academy Graduating Students' },
    { src: '/assets/images/stargate-graduating-students-1.jpg', description: 'Stargate Academy Graduating Students' },
    { src: '/assets/images/stargate-graduation-student-2.jpg', description: 'Stargate Academy Graduating Students' },
    { src: '/assets/images/stargate2.jpg', description: 'stargate students' },
    { src: '/assets/images/stargate3.jpg', description: 'stargate students' },
    { src: '/assets/images/stargate4.jpg', description: 'stargate students' },
    { src: '/assets/images/stargate5.jpg', description: 'stargate students' },
    { src: '/assets/images/stargate6.jpg', description: 'stargate students' },
    { src: '/assets/images/stargate7.jpg', description: 'stargate students' },
    
    // '/assets/images/stargate1.jpg',
    // '/assets/images/stargate2.jpg',
    // '/assets/images/stargate3.jpg',
    // '/assets/images/stargate4.jpg',
    // '/assets/images/stargate6.jpg',
    // '/assets/images/stargate5.jpg',
    // '/assets/images/stargate7.jpg',
    // '/assets/images/stargate8.jpg',
    // '/assets/images/stargate9.jpg',
    
  ];

  // State for lightbox
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageWithDescription | null>(null);

  // Open modal with clicked image
  const openModal = (image:ImageWithDescription) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  // Custom styles for the modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%', // Adjust the modal width
      height: '70%', // Adjust the modal height
    },
  };

  return (
    <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-90">Photo Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageUrls.map((image, index) => (
          <button key={index} onClick={() => openModal(image)} className="focus:outline-none">
            <div className="relative overflow-hidden rounded-lg">
              <Image src={image.src} alt={`Gallery image ${index + 1}`} layout="responsive" width={400} height={300} objectFit="cover" />
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Lightbox Modal with Tailwind CSS */}
    {currentImage && (
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Image Modal" style={customStyles}>
        <div className="relative w-full h-full">
          <Image src={currentImage.src} alt="Expanded gallery image" layout="fill" objectFit="contain" />
          <p className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">{currentImage.description}</p>
        </div>
      </Modal>
    )}
  </div>
);
};

export default Gallery;

{/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles} contentLabel="Image Modal">
        <Image src={currentImage} alt="Expanded gallery image" layout="fill" objectFit="contain" />
      </Modal> */}