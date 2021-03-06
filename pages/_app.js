import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import SEO from '@/helpers/seo.config';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="grain fixed inset-0 z-[10000000] pointer-events-none"></div>
      
      <DefaultSeo {...SEO} /> 

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  )
}