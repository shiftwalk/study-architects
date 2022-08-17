import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domMax, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import Project from '@/components/project'
import SanityPageService from '@/services/sanityPageService'
import SanityBlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    contentHeading,
    heroText,
    heroImage {
      asset-> {
        ...,
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    imageGrid[] {
      asset-> {
        ...,
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    contentText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "projects": *[_type == "projects"]{
    title,
    location,
    projectCode,
    status,
    year,
    images[] {
      asset-> {
        ...,
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
  },
  "contact": *[_type == "contact"][0]{
    emailAddress,
    address,
    instagram
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, projects, contact } } = pageService.getPreviewHook(initialData)()
  const constraintsRef = useRef(null)
  const {theme, setTheme} = useTheme()

  const [hoveringProjects, setHoveringProjects] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  const toggleTheme = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  function updateProject(e) {
    setHoveringProjects(true)
    setActiveProject(e)
  }
  
  function resetProject() {
    setHoveringProjects(false)
    setActiveProject(0)
  }

  return (
    <Layout>
      <NextSeo title={home.title} />
      
      <LazyMotion features={domMax}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative overflow-hidden"
        >
          <div 
            className="bg-[#7FA9B3] dark:bg-[#CA8FA4] w-full h-screen p-[20px] flex items-center justify-center fixed top-0 z-[10] overflow-hidden"
          >
            <div className="grain fixed inset-0 z-[10000000] pointer-events-none"></div>

            <span className="absolute top-0 left-0 text-sm md:text-[15px] xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-8 md:mb-0 p-[20px] dark:text-black">
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

              <Image
                image={home.heroImage}
                focalPoint={home.heroImage.asset.hotspot}
                layout="responsive"
                priority
                className="rounded-full w-[45vw] md:w-[24vw] max-w-[450px] pointer-events-none"
                sizes="(min-width: 768px) 50vw, 50vw"
              />
            </m.div>

            {/* <m.div
              drag
              dragMomentum={false}
              whileDrag={{ scale: 0.95 }} 
              className="absolute bottom-0 right-0 mr-[20vw] mb-[10vh] z-[101] bg-blend-screen mix-blend-screen cursor-grab block">
              <img src="/images/intro-02.jpg" alt="Something" className="w-[33vw] md:w-[18vw] max-w-[410px] pointer-events-none" />
            </m.div> */}

            <div className="w-[100vw] relative">
              <span className="absolute inset-0 w-full text-white text-center flex items-center justify-center z-[100] text-[22px] md:text-[25px] xl:text-[28px] opacity-80">
                {home.heroText}
              </span>
              <svg className="w-full mix-blend-multiply dark:mix-blend-normal z-[99]" viewBox="0 0 1599 396" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#232323"><path d="m124.767 230.298 50.017 10.443c24.184 4.946 40.673 14.29 40.673 36.825 0 26.383-25.283 40.673-56.062 40.673-30.23 0-55.514-13.191-62.659-45.07H0c8.794 79.148 76.95 122.569 159.395 122.569 81.895 0 153.348-45.07 153.348-121.469 0-59.911-35.177-100.584-117.072-115.974l-50.567-10.443c-20.337-4.397-39.574-11.542-39.574-33.528 0-25.283 26.383-36.825 48.368-36.825 25.833 0 46.719 12.092 53.315 39.574h96.736C292.956 41.773 230.847 0 153.898 0 79.148 0 8.245 42.872 8.245 117.622c0 61.559 41.772 98.385 116.522 112.676ZM601.377 5.496H302.375v77.5h101.133v307.246h96.736V82.995h101.133V5.496ZM779.631 395.738c124.768 0 163.792-72.552 163.792-156.097V5.496h-96.736v234.145c0 39.574-10.993 78.598-67.056 78.598-56.612 0-67.055-39.024-67.055-78.598V5.496H615.29v234.145c0 83.545 37.375 156.097 164.341 156.097ZM1076.65 312.743h-21.44V82.995h21.44c81.89 0 112.12 45.62 112.12 114.874 0 69.254-30.23 114.874-112.12 114.874Zm-118.725 77.499h118.725c139.05 0 208.86-78.049 208.86-192.373 0-114.324-69.81-192.373-208.86-192.373H957.925v384.746Z"/><path d="M1364.36 390.242h96.73V250.085L1598.5 5.496h-102.23l-83.55 154.998-83.54-154.998h-102.23l137.41 243.489v141.257ZM1597.68 341.985c0 27.555-22.34 49.892-49.89 49.892s-49.89-22.337-49.89-49.892c0-27.555 22.34-49.893 49.89-49.893s49.89 22.338 49.89 49.893Z"/></g></svg>
            </div>
          </div>

          <div className="absolute top-[-10vw] left-[-15vw] right-[-15vw] bottom-[-10vw] w-[130vw] h-full flex overflow-x-hidden items-start mb-12 md:mb-[5vw] overflow-hidden" ref={constraintsRef}>
          </div>

          <m.article variants={fade} className="relative p-[20px] mt-[100vh] pt-[8vw] md:pt-[6vw] bg-white dark:bg-black z-[100] overflow-hidden">

            <div className="grain absolute inset-0 z-[10000000] pointer-events-none opacity-50"></div>
            {/* <span className="block md:fixed top-0 left-0 text-sm md:text-[1.2vw] xl:text-[1.05vw] 2xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-8 md:mb-0 md:p-[20px]">
              <span className="block">STUDY.</span>
              <span className="block">81 Langton Street Unit 11,</span>
              <span className="block">San Francisco,</span>
              <span className="block">California 94103</span>
            </span> */}

            <h1 className="display-heading w-[85vw] mb-12 md:mb-[8vw] md:indent-[25vw]">{home.contentHeading}</h1>

            <div className="whitespace-nowrap flex items-start mx-[-20px] ml-[-8vw] mb-12 md:mb-[8vw]">
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[8vw] cursor-grab"
              >
                <Image
                  image={home.imageGrid[0]}
                  focalPoint={home.imageGrid[0].asset.hotspot}
                  layout="responsive"
                  priority
                  className="w-full pointer-events-none"
                  sizes="(min-width: 768px) 60vw, 60vw"
                />
              </m.span>
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[8vw] cursor-grab"
              >
                <Image
                  image={home.imageGrid[1]}
                  focalPoint={home.imageGrid[1].asset.hotspot}
                  layout="responsive"
                  priority
                  className="w-full pointer-events-none"
                  sizes="(min-width: 768px) 60vw, 60vw"
                />
              </m.span>
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[8vw] cursor-grab"
              >
                <Image
                  image={home.imageGrid[2]}
                  focalPoint={home.imageGrid[2].asset.hotspot}
                  layout="responsive"
                  priority
                  className="w-full pointer-events-none"
                  sizes="(min-width: 768px) 60vw, 60vw"
                />
              </m.span>
              <m.span
                drag
                dragConstraints={constraintsRef}
                dragMomentum={false}
                whileDrag={{ scale: 0.95 }} 
                className="inline-block w-[25vw] mr-[-8vw] cursor-grab"
              >
                <Image
                  image={home.imageGrid[3]}
                  focalPoint={home.imageGrid[3].asset.hotspot}
                  layout="responsive"
                  priority
                  className="w-full pointer-events-none"
                  sizes="(min-width: 768px) 60vw, 60vw"
                />
              </m.span>
            </div>

            <div className="content w-11/12 md:w-1/3 max-w-[450px] md:mx-auto mb-[15vw] md:mb-[12vw] xl:mb-[10vw]">
              <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={home.contentText} />
            </div>


            <div className="content content--no-indent flex">
              <p className="block">Projects</p>
              <p className="ml-auto block">( {projects.length} )</p>
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

              {projects.map((e, i) => {

                let activeState = 'opacity-30'

                if (i == activeProject && hoveringProjects) {
                  activeState = 'opacity-100'
                } 
                if (!hoveringProjects) {
                  activeState = 'opacity-100'
                }
                return (
                  <li onMouseEnter={()=> updateProject(i)} onMouseLeave={()=> resetProject()} className={`block ${ i == 0 && 'border-t border-current' } transition-opacity ease-in-out duration-[200ms] ${activeState}`} key={i}>
                    <Project
                      title={e.title}
                      year={e.year}
                      status={e.status}
                      location={e.location}
                      projectCode={e.projectCode}
                      images={e.images}
                      isOpen={i == 1}
                    />
                  </li>
                )
              })}
            </ul>
            
            <div className="text-center my-[20vw] md:my-[13vw]">
              <a href={`mailto:${contact.emailAddress}`} className="display-heading font-sans group tracking-tight relative inline-block">
                <span className="inline-block md:group-hover:translate-y-[-1.2vw] transition-translate ease-in-out duration-500">{contact.emailAddress.replace('@', '[at]')}</span>

                <div className="w-0 md:group-hover:w-full transition-all delay-75 ease-in-out duration-500 h-1 md:mb-[-1.2vw] bg-current absolute bottom-0 left-0 right-0"></div>
              </a>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>

      <Footer address={contact.address} instagram={contact.instagram} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}