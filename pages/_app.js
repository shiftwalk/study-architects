import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import SEO from '@/helpers/seo.config';
import { IntroContext } from '@/context/intro'
import { OpenProjectsContext } from '@/context/openProjects'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);
  const [openProjects, setOpenProjects] = useState([1]);

  // const introEnd = {
  //   visible: { opacity: '100%' },
  //   hidden: { opacity: 0 }
  // }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <OpenProjectsContext.Provider value={[openProjects, setOpenProjects]}>
          {/* <LazyMotion features={domAnimation}>
            { !introContext && (
              <m.div 
                initial="visible"
                animate="hidden"
                variants={introEnd}
                transition={{ delay: 1.2, duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                className="bg-[#CA8FA4] fixed inset-0 z-[1000] p-[20px] pointer-events-none flex items-center justify-center"
              >
                <span className="absolute top-0 left-0 text-sm md:text-[1.2vw] xl:text-[1.05vw] 2xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-8 md:mb-0 p-[20px]">
                  <span className="block">STUDY.</span>
                  <span className="block">81 Langton Street Unit 11,</span>
                  <span className="block">San Francisco,</span>
                  <span className="block">California 94103</span>
                </span>

                <span className="absolute top-0 left-0 ml-[12vw] mt-[10vh] z-[100] bg-blend-screen mix-blend-screen opacity-80">
                  <img src="/images/intro-01.jpg" alt="Something" className="rounded-full w-[45vw] md:w-[24vw] max-w-[450px] pointer-events-none" />
                </span>

                <span className="absolute bottom-0 right-0 mr-[20vw] mb-[10vh] z-[100] bg-blend-screen mix-blend-screen">
                  <img src="/images/intro-02.jpg" alt="Something" className="w-[33vw] md:w-[18vw] max-w-[410px] pointer-events-none" />
                </span>

                <div className="w-[100vw] relative">
                  <span className="absolute inset-0 w-full text-white text-center flex items-center justify-center z-[101] text-[22px] md:text-[25px] xl:text-[28px]">
                    Architectural Studio
                  </span>
                  <svg className="w-full mix-blend-multiply z-[99]" viewBox="0 0 1599 396" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#232323"><path d="m124.767 230.298 50.017 10.443c24.184 4.946 40.673 14.29 40.673 36.825 0 26.383-25.283 40.673-56.062 40.673-30.23 0-55.514-13.191-62.659-45.07H0c8.794 79.148 76.95 122.569 159.395 122.569 81.895 0 153.348-45.07 153.348-121.469 0-59.911-35.177-100.584-117.072-115.974l-50.567-10.443c-20.337-4.397-39.574-11.542-39.574-33.528 0-25.283 26.383-36.825 48.368-36.825 25.833 0 46.719 12.092 53.315 39.574h96.736C292.956 41.773 230.847 0 153.898 0 79.148 0 8.245 42.872 8.245 117.622c0 61.559 41.772 98.385 116.522 112.676ZM601.377 5.496H302.375v77.5h101.133v307.246h96.736V82.995h101.133V5.496ZM779.631 395.738c124.768 0 163.792-72.552 163.792-156.097V5.496h-96.736v234.145c0 39.574-10.993 78.598-67.056 78.598-56.612 0-67.055-39.024-67.055-78.598V5.496H615.29v234.145c0 83.545 37.375 156.097 164.341 156.097ZM1076.65 312.743h-21.44V82.995h21.44c81.89 0 112.12 45.62 112.12 114.874 0 69.254-30.23 114.874-112.12 114.874Zm-118.725 77.499h118.725c139.05 0 208.86-78.049 208.86-192.373 0-114.324-69.81-192.373-208.86-192.373H957.925v384.746Z"/><path d="M1364.36 390.242h96.73V250.085L1598.5 5.496h-102.23l-83.55 154.998-83.54-154.998h-102.23l137.41 243.489v141.257ZM1597.68 341.985c0 27.555-22.34 49.892-49.89 49.892s-49.89-22.337-49.89-49.892c0-27.555 22.34-49.893 49.89-49.893s49.89 22.338 49.89 49.893Z"/></g></svg>
                </div>
              </m.div>
            )}
          </LazyMotion> */}

          { pageProps.preview && <><div className={'fixed bottom-0 w-auto p-2 bg-red-500 text-sm text-white justify-center flex z-[10000000] uppercase m-4 tracking-wide'}>Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a></div></> }
          
          <DefaultSeo {...SEO} />

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </OpenProjectsContext.Provider>
      </IntroContext.Provider>
    </ThemeProvider>
  )
}