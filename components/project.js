import { LazyMotion, domMax, m, AnimatePresence } from 'framer-motion'
import { useContext, useState } from 'react';
import Image from "@/components/image";
import FsLightbox from 'fslightbox-react';
import { OpenProjectsContext } from '@/context/openProjects'

export default function Project({ isOpen, title, status, year, projectCode, location, images, i }) {
  const [open, setOpen] = useState(isOpen ? isOpen : false);

  const [hoveringImages, setHoveringImages] = useState(false)
  const [openProjects, setOpenProjects] = useContext(OpenProjectsContext)
  const [activeImage, setActiveImage] = useState(0)

  // function updateImages(e) {
  //   setHoveringImages(true)
  //   setActiveImage(e)
  // }
  
  // function resetImages() {
  //   setHoveringImages(false)
  //   setActiveImage(0)
  // }

  function updateOpenProjects(e) {
    setOpen(open ? false : true)

    setOpenProjects(openProjects => openProjects.includes(e) ? openProjects.filter(n => n !== e) : [e, ...openProjects])
  }
  
  // const [lightboxController, setLightboxController] = useState({
  //   toggler: false,
  //   slide: 1
  // });

  // function openLightboxOnSlide(number) {
  //   setLightboxController({
  //     toggler: !lightboxController.toggler,
  //     slide: number
  //   });
  // }

  // let imageUrls = []
  
  // for (let i = 0; i < images.length; i++) {
  //   imageUrls.push(images[i].asset.url);
  // }

  return (
    <>
      <button onClick={() => updateOpenProjects(i)} className="border-b border-current flex items-center flex-wrap py-4 md:py-5 w-full outline-none focus:outline-none text-left">
        <span className="block list-heading w-full md:flex-1 mb-3 md:mb-0 pr-8">
          {title}
        </span>

        <span className="w-full md:w-auto md:ml-auto flex space-x-[3vw] md:space-x-[2vw] text-xs leading-none md:text-base md:leading-none">
          <span className="block uppercase flex-1 md:flex-none md:w-[110px] md:text-right">{location}</span>
          <span className="block uppercase w-[80px] md:flex-none md:w-[100px] text-center md:text-right">{year}</span>
          <span className="block uppercase flex-1 md:flex-none md:w-[130px] text-right">{status ? status : 'In Progress'}</span>
          {/* <span className="block uppercase flex-1 md:flex-none md:w-[65px] tabular-nums text-right">{projectCode}</span> */}
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

        <AnimatePresence>
          {open && (
            <m.div
              initial={{ x: '5%', opacity: 0, transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] } }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] } }}
              exit={{ x: '5%', opacity: 0, transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] } }}
            >
              <m.div drag={images.length > 3 ? 'x' : false} dragConstraints={{ right: 0 }} dragMomentum={false} className={`w-auto pt-4 pb-3 md:pt-5 md:pb-3 whitespace-nowrap hidden md:flex ${images.length > 3 ? 'cursor-grab' : '' }`}>
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
                        <div className="transform origin-center ease-in-out duration-[1200ms] transition-transform scale-[1.005] group-hover:scale-[1.1]">
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


              {/* Mobile */}
              <m.div drag={images.length > 1 ? 'x' : false} dragConstraints={{ right: 0 }} dragMomentum={false} className={`w-auto pt-4 pb-3 md:pt-5 md:pb-3 whitespace-nowrap flex md:hidden ${images.length > 1 ? 'cursor-grab' : '' }`}>
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
                        <div className="transform origin-center ease-in-out duration-[1200ms] transition-transform scale-[1.005] group-hover:scale-[1.1]">
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
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}