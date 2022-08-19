import { LazyMotion, domMax, m } from 'framer-motion'
import { useState } from 'react';
import Image from "@/components/image";
import FsLightbox from 'fslightbox-react';

export default function Project({ isOpen, title, status, year, projectCode, location, images }) {
  const [open, setOpen] = useState(isOpen ? isOpen : false);

  const [hoveringImages, setHoveringImages] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  function updateImages(e) {
    setHoveringImages(true)
    setActiveImage(e)
  }
  
  function resetImages() {
    setHoveringImages(false)
    setActiveImage(0)
  }
  
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  let imageUrls = []
  
  for (let i = 0; i < images.length; i++) {
    imageUrls.push(images[i].asset.url);
  }

  return (
    <>
      <button onClick={() => setOpen(open ? false : true)} className="border-b border-current flex items-center flex-wrap py-4 md:py-5 w-full outline-none focus:outline-none text-left">
        <span className="block list-heading w-full md:flex-1 mb-3 md:mb-0 pr-8">
          {title}
        </span>

        <span className="w-full md:w-auto md:ml-auto flex space-x-[3vw] md:space-x-[2vw] text-xs leading-none md:text-base md:leading-none">
          <span className="block uppercase flex-1 md:flex-none md:w-[110px]">{location}</span>
          <span className="block uppercase flex-1 md:flex-none md:w-[60px]">{year}</span>
          <span className="block uppercase flex-1 md:flex-none md:w-[130px]">{status ? status : 'In Progress'}</span>
          <span className="block uppercase flex-1 md:flex-none md:w-[65px] tabular-nums text-right">{projectCode}</span>
        </span>
      </button>
      
      <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-[450ms] ${open ? 'max-h-[60vw] md:max-h-[40vw]' : 'max-h-0' }`}>
        {/* <FsLightbox
          toggler={lightboxController.toggler}
          type="image"
          sources={imageUrls}
          slide={lightboxController.slide}
        /> */}
        
        <div className="absolute bottom-0 left-0 right-0 w-full border-b border-current"></div>
        <m.div drag={images.length > 3 ? 'x' : false} dragConstraints={{ right: 0 }} dragMomentum={false} className={`w-auto pt-4 pb-3 md:pt-5 md:pb-3 whitespace-nowrap flex ${images.length > 3 ? 'cursor-grab' : '' }`}>
          <div className="whitespace-nowrap space-x-5 items-end w-auto">
            {images.map((e, i) => {
              let activeState = 'opacity-30'

              if (i == activeImage && hoveringImages) {
                activeState = 'opacity-100'
              } 
              if (!hoveringImages) {
                activeState = 'opacity-100'
              }

              return (
                <div className={`focus:outline-none focus:border-none w-[34vw] md:w-[22vw] max-w-[380px] inline-block transition-opacity ease-in-out duration-[400ms] overflow-hidden group ${activeState}`} key={i}>
                  <div className="transform origin-center ease-in-out duration-[750ms] transition-transform group-hover:scale-[1.1]">
                    <Image
                      image={e}
                      focalPoint={e.asset.hotspot}
                      layout="responsive"
                      priority
                      className="w-full pointer-events-none"
                      sizes="(min-width: 768px) 25vw, 25vw"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </m.div>
      </div>
    </>
  )
}