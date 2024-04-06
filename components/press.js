import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Press({ props, items, email }) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30, align: 'start' })

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="mb-[7vw]">
      <div className="flex mb-2 md:mb-3">
        <span className="block mr-auto">In The Press</span>
        <span className="block ml-auto text-right">(<span className="inline-block mx-[2px]">{items.length}</span>)</span>
      </div>
      <div className="embla border-t border-b border-black dark:border-texture-white">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            { items.length < 4 ? (
              <>
              {items.map((e,i) => {
                return (
                  <div className={`embla__slide flex-[0_0_90%] ${items.length == 2 ? 'md:flex-[0_0_50.3%]' : 'md:flex-[0_0_33.4%]' } border-r border-black dark:border-texture-white flex items-center text-center aspect-[10/8]`} key={i}>
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="w-full flex flex-wrap py-[10vw] md:py-[5vw] hover-underline text-center justify-center px-[2vw]">
                      <span className="block uppercase text-xs mb-4 md:mb-6">{e.publication}</span>
                      <span className="inline font-serif text-[7.5vw] md:text-[3.5vw] lg:text-[3.3vw] leading-none mb-4 md:mb-6 mix-blend-difference bg-blend-difference"><span className="anim-underline mix-blend-difference bg-blend-difference">{e.title}</span></span>
                      <span className="block uppercase text-xs">{e.type}</span>
                    </a>
                  </div>
                )
              })}
              {items.map((e,i) => {
                return (
                  <div className={`embla__slide flex-[0_0_90%] ${items.length == 2 ? 'md:flex-[0_0_50.3%]' : 'md:flex-[0_0_33.4%]' } border-r border-black dark:border-texture-white flex items-center text-center aspect-[10/8]`} key={i}>
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="w-full flex flex-wrap py-[10vw] md:py-[5vw] hover-underline text-center justify-center px-[2vw]">
                      <span className="block uppercase text-xs mb-4 md:mb-6">{e.publication}</span>
                      <span className="inline font-serif text-[7.5vw] md:text-[3.5vw] lg:text-[3.3vw] leading-none mb-4 md:mb-6 mix-blend-difference bg-blend-difference"><span className="anim-underline mix-blend-difference bg-blend-difference">{e.title}</span></span>
                      <span className="block uppercase text-xs">{e.type}</span>
                    </a>
                  </div>
                )
              })}
              </>
            ) : (
              <>
                {items.map((e,i) => {
                  return (
                    <div className="embla__slide border-r border-black dark:border-texture-white flex items-center text-center aspect-[10/8]" key={i}>
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="w-full flex flex-wrap py-[10vw] md:py-[5vw] hover-underline text-center justify-center px-[2vw]">
                        <span className="block uppercase text-xs mb-4 md:mb-6">{e.publication}</span>
                        <span className="inline font-serif text-[7.5vw] md:text-[3.5vw] lg:text-[3.3vw] leading-none mb-4 md:mb-6 mix-blend-difference bg-blend-difference"><span className="anim-underline mix-blend-difference bg-blend-difference">{e.title}</span></span>
                        <span className="block uppercase text-xs">{e.type}</span>
                      </a>
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </div>

        {/* <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div> */}
      </div>
      <div className="flex mt-3 md:mt-4">
        <span className="block mr-auto">For all PR inquiries, please contact us <a className="underline text-black dark:text-texture-white hover:text-opacity-60 transition-color ease-in-out duration-500" href={`mailto:${email}`}>here</a>.</span>

        <div className="flex ml-auto space-x-3 text-xl md:text-2xl lg:text-3xl leading-none md:leading-none lg:leading-none">
          <button type="button" onClick={onPrevButtonClick} className="block">{'<'}</button>
          <button type="button" onClick={onNextButtonClick} className="block">{'>'}</button>
        </div>
      </div>
    </div>
  )
}