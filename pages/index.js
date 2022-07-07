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
            <span className="block md:absolute top-0 left-0 text-sm md:text-[1.2vw] xl:text-[1.05vw] 2xl:text-[17px] leading-none md:leading-none 2xl:leading-none mb-4 md:mb-0">
              <span className="block">STUDY.</span>
              <span className="block">81 Langton Street Unit 11,</span>
              <span className="block">San Francisco,</span>
              <span className="block">California 94103</span>
            </span>

            <button onClick={() => toggleTheme() } className="outline-none border-none block absolute top-0 right-0 w-[30px] md:w-[37px] h-[30px] md:h-[37px] bg-current rounded-full">
            </button>


            <h1 className="display-heading w-[85vw] mb-[5vw] md:indent-[25vw]">Study Architects is a design practice made of a team of skilled architects focused on research, process and ingenuity.</h1>

            <div className="content w-11/12 md:w-1/3 max-w-[450px] md:mx-auto mb-[5vw]">
              <p>We focus on creating buildings and spaces that tell stories, not only through the structural decisions that we make, but in the materials we choose to define them, and the tiniest details that we fill them with.</p>
              
              <p>Founded in 2019 by Daniel Yoder + Joe DiNapoli, STUDY has since grown to a dedicated team of 18, situated around the globe. Whether it’s in Norway, the UK, the States or beyond, we value the diverse perspectives that each provide.</p>

              <p>STUDY is Daniel, Joe, Mark, Laura, Sash, Sarah, Stephen, Wes, Cassie, Marie, Chris, Paul, Jessica, Claire, Jason, Gunnar, Sebastian, Sunny &amp; Peter.</p>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
