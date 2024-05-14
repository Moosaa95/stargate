

const NewsLetter = () => {
  return (
    <div className="w-full bg-black py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-freeman">
                    News Letters
                </h1>
                <p className="font-merriweather">Sign up to our newsletter and stay up to date.</p>
                <p className="font-merriweather">Stay updated with our latest achievements and upcoming events. From inter-Academy competitions to community service projects, Stargate students are always on the move, making a difference.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                    <button className="bg-gray-90 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 font-freeman">Subscribe</button>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default NewsLetter
