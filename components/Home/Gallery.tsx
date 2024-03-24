import Image from "next/image";

interface GalleryProps {
    image: string;
    title: string;
}

interface GalleryCardsProps {
    galleries: GalleryProps[];
  }

const Gallery = ({galleries}:GalleryCardsProps) => {
  return (
    <section className="">
        <h3 className="text-gray-90 text-2xl uppercase font-bold mt-32 text-center">Gallery</h3>
        <div className="mt-12 overflow-x-hidden w-full relative">
            <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[40%] animate-slide hover:animati">
                {galleries.map((gallery) => (
                    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
                        <Image src={gallery.image} alt={gallery.title} width={400} height={300}/>
                        <div>{gallery.title}</div>
                    </div>
                ))}
            </div>
        </div>
        {/* <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
        <Image src={image} alt={title} width={400} height={300}/>
        <div>{title}</div>
        </div> */}

      
    </section>
  )
}

export default Gallery
