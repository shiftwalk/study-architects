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
      <button onClick={() => setOpen(open ? false : true)} className="border-b border-current flex items-center flex-wrap py-5 w-full outline-none focus:outline-none text-left">
        <span className="block list-heading w-full md:flex-1 mb-3 md:mb-0 pr-8">
          {title}
        </span>

        <span className="w-full md:w-auto md:ml-auto flex space-x-[3vw] text-sm leading-none md:text-lg md:leading-none">
          <span className="block uppercase w-[90px] md:w-[110px]">{location}</span>
          <span className="block uppercase w-[50px] md:w-[60px]">{year}</span>
          <span className="block uppercase w-[110px] md:w-[130px]">{status ? status : 'In Progress'}</span>
          <span className="block uppercase w-[65px]">{projectCode}</span>
        </span>
      </button>
      
      {open && (
        <div className="w-full py-5 border-b border-current">
          <FsLightbox
            toggler={lightboxController.toggler}
            type="image"
            sources={imageUrls}
            slide={lightboxController.slide}
          />
          <m.div drag={images.length > 6 ? 'x' : false} dragConstraints={{ right: 0 }} dragMomentum={false} className={`w-auto whitespace-nowrap flex ${images.length > 6 ? 'cursor-grab' : '' }`}>
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
                  <button onMouseEnter={()=> updateImages(i)} onMouseLeave={()=> resetImages()} onClick={() => openLightboxOnSlide(i + 1)} className={`focus:outline-none focus:border-none w-[30vw] md:w-[16vw] max-w-[280px] inline-block transition-opacity ease-in-out duration-[450ms] ${activeState}`} key={i}>
                    <Image
                      image={e}
                      focalPoint={e.asset.hotspot}
                      layout="responsive"
                      priority
                      className="w-full pointer-events-none"
                      sizes="(min-width: 768px) 25vw, 25vw"
                    />
                  </button>
                )
              })}
            </div>
          </m.div>
        </div>
      )}
    </>
  )
}