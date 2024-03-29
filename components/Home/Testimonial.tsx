"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface TestimonialProps {
    testimonials: { id: number, userType: string, image: string, name: string, text: string }[];
}
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Testimonial = ({ testimonials }: TestimonialProps) => {
    const [expandedTextId, setExpandedTextId] = useState<number | null>(null);

    const handleViewMore = (testimonialId: number) => {
        setExpandedTextId(testimonialId === expandedTextId ? null : testimonialId);
    };

    const SampleNextArrow = ({ className, onClick, style }:ArrowProps) => (
        <div className={`${className} bg-red-500 rounded-full w-8 h-8 flex items-center justify-center`} onClick={onClick} style={{...style, backgroundColor:'gray'}}>
            <i className="fas fa-chevron-right text-gray-90"></i>
        </div>
    );

    const SamplePrevArrow = ({ className, onClick, style }: ArrowProps) => (
        <div className={`${className} bg-green-500 rounded-full w-8 h-8 flex items-center justify-center`} onClick={onClick} style={{...style, backgroundColor:'gray'}}>
            <i className="fa-2x fas fa-chevron-left text-gray-90"></i>
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            }
        ]
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* <h3 className="text-2xl font-semibold text-center mb-8 text-gray-90">Voices From Our Family</h3> */}
                <Slider {...settings} className=" ">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8 ">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.userType}</p>
                                </div>
                            </div>
                            <p className={`text-gray-800 mb-4 ${expandedTextId === testimonial.id ? 'expand' : 'truncate'}`}>
                            {expandedTextId === testimonial.id ? testimonial.text : `${testimonial.text.slice(0, 100)}...`}
                                </p>
                                {testimonial.text.length > 100 && (
                                <button className="text-blue-500 hover:underline focus:outline-none" onClick={() => handleViewMore(testimonial.id)}>
                                    {expandedTextId === testimonial.id ? 'Show less' : 'View more'}
                                </button>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx>{`
                .truncate {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-height: 2.5em; /* Adjust as needed */
                    transition: max-height 0.5s ease-out;
                }
                .expand {
                    max-height: 1000px; /* Large enough to display full text */
                    transition: max-height 0.5s ease-in;
                }
            `}</style>
        </section>
    );
}

export default Testimonial;
