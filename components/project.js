import { LazyMotion, domMax, m } from 'framer-motion'
import { useState } from 'react';

export default function Project({ isOpen, title, status, year }) {
  const [open, setOpen] = useState(isOpen ? isOpen : false);

  return (
    <>
      <button onClick={() => setOpen(open ? false : true)} className="border-b border-current flex items-center flex-wrap py-5 w-full outline-none focus:outline-none text-left">
        <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
          {title}
        </span>

        <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
          <span className="block uppercase w-[40px] md:w-[60px]">S.1071</span>
          <span className="block uppercase w-[110px] md:w-[130px]">{status ? status : 'In Progress'}</span>
          <span className="block uppercase w-[65px]">{year}—</span>
        </span>
      </button>
      
      {open && (
        <div className="w-full py-5 border-b border-current">
          <m.div drag="x" dragConstraints={{ right: 0 }} dragMomentum={false} className="w-auto whitespace-nowrap flex cursor-grab">
            <div className="whitespace-nowrap space-x-5 items-end w-auto">
              <div className="w-[30vw] md:w-[16vw] max-w-[280px] inline-block">
                <img src="/images/content-01.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[33vw] md:w-[18vw] max-w-[280px] inline-block">
                <img src="/images/content-02.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[30vw] md:w-[16vw] max-w-[280px] inline-block">
                <img src="/images/content-01.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[33vw] md:w-[18vw] max-w-[280px] inline-block">
                <img src="/images/content-02.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[30vw] md:w-[16vw] max-w-[280px] inline-block">
                <img src="/images/content-01.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[33vw] md:w-[18vw] max-w-[280px] inline-block">
                <img src="/images/content-02.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[30vw] md:w-[16vw] max-w-[280px] inline-block">
                <img src="/images/content-01.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[33vw] md:w-[18vw] max-w-[280px] inline-block">
                <img src="/images/content-02.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[30vw] md:w-[16vw] max-w-[280px] inline-block">
                <img src="/images/content-01.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
              <div className="w-[33vw] md:w-[18vw] max-w-[280px] inline-block">
                <img src="/images/content-02.jpg" alt="Content Image" className="w-full pointer-events-none" />
              </div>
            </div>
          </m.div>
        </div>
      )}
    </>
  )
}