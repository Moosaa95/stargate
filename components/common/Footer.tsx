// // const Footer = () => {
// //     const currentYear = new Date().getFullYear();
// //     return (
// //         <footer className="bg-gray-900 text-white py-4">
// //             {/* Footer content */}
// //             <div className="container mx-auto text-center">
// //                 <p>&copy; {currentYear} Stargate International Academy. All rights reserved.</p>
// //             </div>
// //         </footer>
// //     );
// // };

// // export default Footer;
// 'use client';

// // import Link from "next/link";
// // import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

// import { Footer } from 'flowbite-react';
// import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

// function FooterComponent() {
//     const currentYear = new Date().getFullYear();
//   return (
//     <Footer bgDark>
//       <div className="w-full">
//         <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
//           <div>
//             <Footer.Title title="Stargate Academy" className='text-white' />
//             <Footer.LinkGroup col>
//               <Footer.Link href="#">About</Footer.Link>
//               <Footer.Link href="#">Programs</Footer.Link>
//               <Footer.Link href="#">Admission</Footer.Link>
//               <Footer.Link href="#">Blog</Footer.Link>
//               <Footer.Link href="#">Contact</Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//           <div>
//             <Footer.Title title="help center" />
//             <Footer.LinkGroup col>
//               <Footer.Link href="#">Twitter</Footer.Link>
//               <Footer.Link href="#">Facebook</Footer.Link>
//               <Footer.Link href="#">Contact Us</Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//           <div>
//             <Footer.Title title="legal" />
//             <Footer.LinkGroup col>
//               <Footer.Link href="#">Privacy Policy</Footer.Link>
//               <Footer.Link href="#">Licensing</Footer.Link>
//               <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//         </div>
//         <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
//           <Footer.Copyright href="#" by="Stargate Academy" year={currentYear} />
//           <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
//             <Footer.Icon href="#" icon={BsFacebook} />
//             <Footer.Icon href="#" icon={BsInstagram} />
//             <Footer.Icon href="#" icon={BsTwitter} />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }

// export default FooterComponent

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   return (
// //     <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
// //       <div>
// //         <h1 className="w-full text-3xl font-bold text-gray-90 ">Stargate Academy</h1>
// //         <p className="py-4">stargetate where stars are born</p>
// //         <div className="flex justify-between md:w-[75%] my-6">
// //           <BsFacebook size={30} />
// //           <BsInstagram size={30} />
// //           <BsTwitter size={30} />
// //         </div>
// //       </div>
// //       <div className="lg:col-span-3 flex justify-between">
// //         <div>
// //           <h6 className="font-medium text-gray-90">Pages</h6>
// //           <ul>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Programs
// //               </Link>
// //             </li>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Programs
// //               </Link>
// //             </li>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Programs
// //               </Link>
// //             </li>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Blog
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //         <div>
// //           <h6 className="font-medium text-gray-90">Support</h6>
// //           <ul>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Contact 
// //               </Link>
// //             </li>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Programs
// //               </Link>
// //             </li>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Programs
// //               </Link>
// //             </li>
// //             <li className="py-2 text-sm">
// //               <Link href="/">
// //                 Programs
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>

// //       </div>

// //     </footer>
// //   )
// // }
// // import Link from 'next/link';
// // import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   return (
// //     <footer className="max-w-7xl mx-auto py-16 px-4 lg:px-8 grid lg:grid-cols-3 gap-8 text-gray-500">
// //       {/* Footer Logo and Social Links */}
// //       <div className="flex flex-col justify-center items-center lg:col-span-1">
// //         <h1 className="text-3xl font-bold text-gray-900 mb-4">Stargate Academy</h1>
// //         <p className="text-sm text-center">Where stars are born</p>
// //         <div className="flex justify-center space-x-6 mt-6">
// //           <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">
// //             <BsFacebook size={24} />
// //           </a>
// //           <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">
// //             <BsInstagram size={24} />
// //           </a>
// //           <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">
// //             <BsTwitter size={24} />
// //           </a>
// //         </div>
// //       </div>

// //       {/* Footer Links */}
// //       <div className="flex flex-col space-y-4">
// //         <h6 className="text-lg font-semibold text-gray-900 mb-4">Pages</h6>
// //         <ul className="space-y-2">
// //           <li>
// //             <Link legacyBehavior href="/programs">
// //               <a className="text-sm text-gray-700 hover:text-blue-500 transition duration-300">Programs</a>
// //             </Link>
// //           </li>
// //           <li>
// //             <Link legacyBehavior href="/about-us">
// //               <a className="text-sm text-gray-700 hover:text-blue-500 transition duration-300">About Us</a>
// //             </Link>
// //           </li>
// //           <li>
// //             <Link legacyBehavior href="/blog">
// //               <a className="text-sm text-gray-700 hover:text-blue-500 transition duration-300">Blog</a>
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Support Links */}
// //       <div className="flex flex-col space-y-4">
// //         <h6 className="text-lg font-semibold text-gray-900 mb-4">Support</h6>
// //         <ul className="space-y-2">
// //           <li>
// //             <Link legacyBehavior href="/contact">
// //               <a className="text-sm text-gray-700 hover:text-blue-500 transition duration-300">Contact</a>
// //             </Link>
// //           </li>
// //           <li>
// //             <Link legacyBehavior href="/faq">
// //               <a className="text-sm text-gray-700 hover:text-blue-500 transition duration-300">FAQ</a>
// //             </Link>
// //           </li>
// //           <li>
// //             <Link legacyBehavior href="/admissions">
// //               <a className="text-sm text-gray-700 hover:text-blue-500 transition duration-300">Admissions</a>
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Bottom Footer */}
// //       <div className="col-span-3 flex justify-between items-center border-t border-gray-300 pt-8">
// //         <p className="text-sm text-gray-500">&copy; {currentYear} Stargate Academy. All rights reserved.</p>
// //         <p className="text-sm text-gray-500">Designed by Your Name</p>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;


// // export default Footer

// import { Footer } from 'flowbite-react';
"use client"
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import {motion} from "framer-motion"
import Link from 'next/link';

// function FooterComponent() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <Footer bgDark>
//       <div className="w-full">
//         <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-8 px-6 py-8 md:py-12">
//           {/* Stargate Academy Links */}
//           <div className='flex flex-row gap-2'>
//             <div>
//             <Image src="/assets/images/icon.jpg" alt="Logo Image" width={74} height={29} className="inline-bloock items-center"/>
//             </div>
//             <div>
//             <Footer.Title title="Stargate Academy" className="text-white text-2xl" />
//             {/* <p className="text-sm text-gray-200">Where stars are born</p> */}
//             </div>
//           </div>
//           <div>
//             <Footer.Title title="Pages" className="text-white" />
//             <Footer.LinkGroup col>
//               <Footer.Link href="#" className="text-gray-200">About Us</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Programs</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Admissions</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Blog</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Contact</Footer.Link>
//             </Footer.LinkGroup>
//           </div>

//           {/* Help Center Links */}
//           <div>
//             <Footer.Title title="Help Center" className="text-gray-200" />
//             <Footer.LinkGroup col>
//               <Footer.Link href="#" className="text-gray-200">Twitter</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Facebook</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Contact Us</Footer.Link>
//             </Footer.LinkGroup>
//           </div>

//           {/* Legal Links */}
//           <div>
//             <Footer.Title title="Legal" className="text-gray-200" />
//             <Footer.LinkGroup col>
//               <Footer.Link href="#" className="text-gray-200">Privacy Policy</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Licensing</Footer.Link>
//               <Footer.Link href="#" className="text-gray-200">Terms & Conditions</Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="w-full bg-gray-700 px-4 py-6 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
//           <Footer.Copyright
//             href="#"
//             by="Stargate Academy"
//             year={currentYear}
//             className="text-gray-200"
//           />
//           <div className="mt-4 flex space-x-6">
//             {/* Social Media Icons */}
//             <Footer.Icon href="#" icon={BsFacebook} className="text-gray-200 hover:text-blue-500" />
//             <Footer.Icon href="#" icon={BsInstagram} className="text-gray-200 hover:text-blue-500" />
//             <Footer.Icon href="#" icon={BsTwitter} className="text-gray-200 hover:text-blue-500" />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }

// export default FooterComponent;

export default function Footer() {
  return (
    <motion.footer className='bg-gray-90 p-10'
      initial={{height: 0}}
      whileInView={{height: 'auto'}}
      transition={{duration: 1}}
    >
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white'>
        <div>
          <div className='mb-6 flex flex-row items-center gap-2'>
            <Image src="/assets/images/icon.jpg" alt="Logo Image" width={74} height={29} className="inline-bloock items-center"/>
            <h3 className='font-bold  text-[1.2rem]'>Stargate Academy</h3>
          </div>
          <p className="text-sm leading-7">
          Welcome Stargate International Academy
Where Stars are Born and Gates Open to the Future.
          </p>
        </div>
        <div>
          <div className='font-bold mb-6'>
           <h3>Pages </h3>
          </div>
          <div className='flex flex-col gap-6'>
          <Link href="" className='text-sm hover:underline'>Home</Link>
          <Link href="" className='text-sm hover:underline'>Blog</Link>
          <Link href="" className='text-sm hover:underline'>Programs</Link>
          <Link href="" className='text-sm hover:underline'>Event</Link>

          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>
            <h3>School</h3>
          </div>
          <div className="flex flex-col gap-6">
            <Link className='text-sm hover:underline' href="">Careers</Link>
            <Link className='text-sm hover:underline' href="">Tahfeez</Link>
            <Link className='text-sm hover:underline' href="">Gallery</Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">
            <p>Email: <span>stargateexcellencehub@gmail.com</span></p>
          </div>
          <div className="text-sm">
            <p>Tel: <span>+2349096207858</span></p>
          </div>
          <div className="flex gap-4">
            <Link className='hover:scale-110 text-xl' href=""><BsFacebook /></Link>
            <Link className='hover:scale-110 text-xl' href=""><BsTwitter /></Link>
            <Link className='hover:scale-110 text-xl' href=""><BsInstagram /></Link>
            <Link className='hover:scale-110 text-xl' href=""><BsLinkedin /></Link>
          </div>
        </div>
      </div>
      

    </motion.footer>
  )
}