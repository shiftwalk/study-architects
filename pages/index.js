import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useTheme } from 'next-themes'


export default function Home() {
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
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="p-[20px]"
        >
          <m.article variants={fade} className="relative">
            <span className="block md:absolute top-0 left-0 text-sm md:text-[1.2vw] xl:text-[1.05vw] 2xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-8 md:mb-0">
              <span className="block">STUDY.</span>
              <span className="block">81 Langton Street Unit 11,</span>
              <span className="block">San Francisco,</span>
              <span className="block">California 94103</span>
            </span>

            <button onClick={() => toggleTheme() } className="outline-none border-none block absolute top-0 right-0 w-[30px] md:w-[37px] h-[30px] md:h-[37px] bg-current rounded-full">
            </button>


            <h1 className="display-heading w-[85vw] mb-6 md:mb-[8vw] md:mb-65vw] md:indent-[25vw]">Study Architects is a design practice made of a team of skilled architects focused on research, process and ingenuity.</h1>

            <div className="content w-11/12 md:w-1/3 max-w-[450px] md:mx-auto mb-[15vw] md:mb-[12vw] xl:mb-[10vw]">
              <p>We focus on creating buildings and spaces that tell stories, not only through the structural decisions that we make, but in the materials we choose to define them, and the tiniest details that we fill them with.</p>
              
              <p>Founded in 2019 by Daniel Yoder + Joe DiNapoli, STUDY has since grown to a dedicated team of 18, situated around the globe. Whether it’s in Norway, the UK, the States or beyond, we value the diverse perspectives that each provide.</p>

              <p>STUDY is Daniel, Joe, Mark, Laura, Sash, Sarah, Stephen, Wes, Cassie, Marie, Chris, Paul, Jessica, Claire, Jason, Gunnar, Sebastian, Sunny &amp; Peter.</p>
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
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  Malibu Estate
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
              </li>
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  Aspen Residence
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
              </li>
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  Yellowstone Club Chalet
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
              </li>
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  Dallas Estate
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
              </li>
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  West Malibu Residence
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
              </li>
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  Hoku Aini Farm House
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
              </li>
              <li className="border-b border-current flex items-center flex-wrap py-5">
                <span className="block list-heading w-full md:flex-1 mb-2 md:mb-0">
                  Desert Dwelling
                </span>

                <span className="w-full md:w-auto md:ml-auto flex space-x-[7vw] text-sm leading-none md:text-lg md:leading-none">
                  <span className="block uppercase">S.1071</span>
                  <span className="block uppercase">In Progress</span>
                  <span className="block uppercase">2017—</span>
                </span>
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
