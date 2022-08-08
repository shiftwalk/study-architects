import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domMax, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useTheme } from 'next-themes'
import { useRef } from 'react'
import Project from '@/components/project'


export default function Home() {
  const constraintsRef = useRef(null)
  const {theme, setTheme} = useTheme()

  const toggleTheme = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domMax}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative overflow-hidden"
        >
          <div 
            className="bg-[#7FA9B3] dark:bg-[#CA8FA4] w-full h-screen p-[20px] flex items-center justify-center fixed top-0 z-[10]"
          >
            <span className="absolute top-0 left-0 text-sm md:text-[1.2vw] xl:text-[1.05vw] 2xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-8 md:mb-0 md:p-[20px] dark:text-black">
              <span className="block">STUDY.</span>
              <span className="block">81 Langton Street Unit 11,</span>
              <span className="block">San Francisco,</span>
              <span className="block">California 94103</span>
            </span>

            <button onClick={() => toggleTheme() } className="outline-none border-none block absolute top-0 right-0 w-[30px] md:w-[37px] h-[30px] md:h-[37px] bg-current dark:bg-black rounded-full m-[20px]">
            </button>

            <m.div
              drag
              dragMomentum={false}
              whileDrag={{ scale: 0.95 }} 
              className="absolute top-0 left-0 ml-[12vw] mt-[10vh] z-[101] bg-blend-screen mix-blend-screen opacity-80 cursor-grab block">
              <img src="/images/intro-01.jpg" alt="Something" className="rounded-full w-[45vw] md:w-[24vw] max-w-[450px] pointer-events-none" />
            </m.div>

            <m.div
              drag
              dragMomentum={false}
              whileDrag={{ scale: 0.95 }} 
              className="absolute bottom-0 right-0 mr-[20vw] mb-[10vh] z-[101] bg-blend-screen mix-blend-screen cursor-grab block">
              <img src="/images/intro-02.jpg" alt="Something" className="w-[33vw] md:w-[18vw] max-w-[410px] pointer-events-none" />
            </m.div>

            <div className="w-[100vw] relative">
              <span className="absolute inset-0 w-full text-white text-center flex items-center justify-center z-[100] text-[22px] md:text-[25px] xl:text-[28px]">
                Architectural Studio
              </span>
              <svg className="w-full mix-blend-multiply dark:mix-blend-normal z-[99]" viewBox="0 0 1599 396" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#232323"><path d="m124.767 230.298 50.017 10.443c24.184 4.946 40.673 14.29 40.673 36.825 0 26.383-25.283 40.673-56.062 40.673-30.23 0-55.514-13.191-62.659-45.07H0c8.794 79.148 76.95 122.569 159.395 122.569 81.895 0 153.348-45.07 153.348-121.469 0-59.911-35.177-100.584-117.072-115.974l-50.567-10.443c-20.337-4.397-39.574-11.542-39.574-33.528 0-25.283 26.383-36.825 48.368-36.825 25.833 0 46.719 12.092 53.315 39.574h96.736C292.956 41.773 230.847 0 153.898 0 79.148 0 8.245 42.872 8.245 117.622c0 61.559 41.772 98.385 116.522 112.676ZM601.377 5.496H302.375v77.5h101.133v307.246h96.736V82.995h101.133V5.496ZM779.631 395.738c124.768 0 163.792-72.552 163.792-156.097V5.496h-96.736v234.145c0 39.574-10.993 78.598-67.056 78.598-56.612 0-67.055-39.024-67.055-78.598V5.496H615.29v234.145c0 83.545 37.375 156.097 164.341 156.097ZM1076.65 312.743h-21.44V82.995h21.44c81.89 0 112.12 45.62 112.12 114.874 0 69.254-30.23 114.874-112.12 114.874Zm-118.725 77.499h118.725c139.05 0 208.86-78.049 208.86-192.373 0-114.324-69.81-192.373-208.86-192.373H957.925v384.746Z"/><path d="M1364.36 390.242h96.73V250.085L1598.5 5.496h-102.23l-83.55 154.998-83.54-154.998h-102.23l137.41 243.489v141.257ZM1597.68 341.985c0 27.555-22.34 49.892-49.89 49.892s-49.89-22.337-49.89-49.892c0-27.555 22.34-49.893 49.89-49.893s49.89 22.338 49.89 49.893Z"/></g></svg>
            </div>
          </div>

          <div className="absolute top-[-10vw] left-[-15vw] right-[-15vw] bottom-[-10vw] w-[130vw] h-full flex overflow-x-hidden items-start mb-12 md:mb-[5vw] overflow-hidden" ref={constraintsRef}>
          </div>

          <m.article variants={fade} className="relative p-[20px] mt-[100vh] pt-[8vw] md:pt-[6vw] bg-white dark:bg-black z-[100]">
            {/* <span className="block md:fixed top-0 left-0 text-sm md:text-[1.2vw] xl:text-[1.05vw] 2xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-8 md:mb-0 md:p-[20px]">
              <span className="block">STUDY.</span>
              <span className="block">81 Langton Street Unit 11,</span>
              <span className="block">San Francisco,</span>
              <span className="block">California 94103</span>
            </span> */}

            <h1 className="display-heading w-[85vw] mb-12 md:mb-[8vw] md:indent-[25vw]">Study Architects is a design practice made of a team of skilled architects focused on research, process and ingenuity.</h1>

            <div className="whitespace-nowrap flex items-start mx-[-20px] ml-[-8vw] mb-12 md:mb-[8vw]">
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[8vw] cursor-grab"
              >
                <img src="/images/01.jpg" alt="Something" className="w-full pointer-events-none" />
              </m.span>
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[8vw] cursor-grab"
              >
                <img src="/images/02.jpg" alt="Something" className="w-full pointer-events-none" />
              </m.span>
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[8vw] cursor-grab"
              >
                <img src="/images/03.jpg" alt="Something" className="w-full pointer-events-none" />
              </m.span>
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[-8vw] cursor-grab"
              >
                <img src="/images/04.jpg" alt="Something" className="w-full pointer-events-none" />
              </m.span>
            </div>

            <div className="content w-11/12 md:w-1/3 max-w-[450px] md:mx-auto mb-[15vw] md:mb-[12vw] xl:mb-[10vw]">
              <p>We focus on creating buildings and spaces that tell stories, not only through the structural decisions that we make, but in the materials we choose to define them, and the tiniest details that we fill them with.</p>
              
              <p>Founded in 2019 by Daniel Yoder + Joe DiNapoli, STUDY has since grown to a dedicated team of 18, situated around the globe. Whether it’s in Norway, the UK, the States or beyond, we value the diverse perspectives that each provide.</p>

              <p>STUDY is Daniel, Joe, Mark, Laura, Sash, Sarah, Stephen, Wes, Cassie, Marie, Chris, Paul, Jessica, Claire, Jason, Gunnar, Sebastian, Sunny &amp; Peter.</p>
            </div>


            <div className="content content--no-indent flex">
              <p className="block">Projects</p>
              <p className="ml-auto block">(8)</p>
            </div>
            <ul>
              {/* {Array.from(Array(10), (e, i) => {
                return (
                  <li key={i} className="border-b border-current flex items-center flex-wrap py-5">
                    <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                      Malibu Residence
                    </span>

                    <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                      <span className="block uppercase">S.1071</span>
                      <span className="block uppercase">In Progress</span>
                      <span className="block uppercase">2017—</span>
                    </span>
                  </li>
                )
              })} */}
              <li className="block border-t border-current">
                <Project title="Malibu House" year="2021" />
              </li>
              <li className="block">
                <Project title="Aspen Residence" isOpen status="Complete" year="2020" />
              </li>
              <li className="block">
                <Project title="Yellowstone Club Chalet" status="Complete" year="2019" />
              </li>
              <li className="block">
                <Project title="Dallas Estate" year="2017" />
              </li>
              <li className="block">
                <Project title="West Malibu Residence" year="2016" />
              </li>
              <li className="block">
                <Project title="Hoku Aini Farm House" year="2015" />
              </li>
              <li className="block">
                <Project title="Desert Dwelling" year="2015" />
              </li>
            </ul>
            
            <div className="text-center my-[20vw] md:my-[13vw]">
              <a href="mailto:studio@study-arch.com" className="display-heading font-sans tracking-tight">studio[at]study-arch.com</a>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
