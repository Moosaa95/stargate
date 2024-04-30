'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

interface ImageWithDescription {
  src: string;
  description: string;
}

const Gallery = () => {
  const imageUrls: ImageWithDescription[] = [
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
    { src: '/assets/images/stargate-interhouse1.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse2.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse3.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse4.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse5.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse6.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse7.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse8.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse9.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse10.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse11.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse12.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse13.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse14.jpeg', description: 'stargate students' },
    { src: '/assets/images/stargate-interhouse15.jpeg', description: 'stargate students' },
    
  ];

  const imagesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageWithDescription | null>(null);

  const pageCount = Math.ceil(imageUrls.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageUrls.slice(indexOfFirstImage, indexOfLastImage);

  const openModal = (image: ImageWithDescription) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%', // Adjust as necessary
      height: '70%', // Adjust as necessary
    },
  };

  // Pagination Handlers
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-90">Photo Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <button key={index} onClick={() => openModal(image)} className="focus:outline-none">
              <div className="relative overflow-hidden rounded-lg">
                <Image src={image.src} alt={`Gallery image ${index + 1}`} layout="responsive" width={400} height={300} objectFit="cover" />
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button disabled={currentPage <= 1} onClick={goToPreviousPage} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-90 disabled:opacity-50">Previous</button>
          <button disabled={currentPage >= pageCount} onClick={goToNextPage} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-90 disabled:opacity-50">Next</button>
        </div>
      </div>

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
