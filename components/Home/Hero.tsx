// import { stargate1 } from "@/public/assets/images";

import Image from "next/image";


interface HeroBgProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    text: string
}

const HeroBg = ({backgroundImage, title, subtitle, text}: HeroBgProps) => {
    console.log(backgroundImage, 'iiii');
    
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image 
                        
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-gray-90">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    return (
   
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            <HeroBg
                backgroundImage="bg-bg-img-1"
                title="student-1"
                subtitle="student-1"
                text="text"
            />
            <HeroBg
                backgroundImage="bg-bg-img-1"
                title="student-1"
                subtitle="student-1"
                text="text"
            />
            <HeroBg
                backgroundImage="bg-bg-img-1"
                title="student-1"
                subtitle="student-1"
                text="text"
            />
        </div>
        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-gray-90 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
          <strong>A Future Bright </strong>with Possibility
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Join us and embark on a transformative journey with Stargate Academy. Our admission process is designed to be as welcoming and inclusive as our Academy community. Whether you're seeking a place for academic rigor, spiritual growth, or extracurricular excellence, you'll find your path here.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
    );
    
  };
  
  export default Hero;
  