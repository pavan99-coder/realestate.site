import React from 'react'

const Gallery1 = () => {
    return (
        <>
       <section className="text-gray-600 body-font mt-0">
  <div className="container px-5 py-24 mx-auto flex flex-wrap -mt-44">
   
    <div className="flex flex-wrap md:-m-2 -m-1">
    <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full object-cover h-full object-center block" src="../images/500x300.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full object-cover h-full object-center block" src="../images/501x301.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  w-full h-full object-cover object-center block" src="../images/600x360.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full h-full object-cover object-center block" src="../images/500x300.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full object-cover h-full object-center block" src="../images/501x301.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full object-cover h-full object-center block" src="../images/501x301.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section> 
        </>
    )
}

export default Gallery1
