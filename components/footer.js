export default function Footer({ address, instagram }) {
  return (
    <footer className="px-[20px] relative z-[100] bg-white dark:bg-black overflow-hidden">
      <div className="grain absolute inset-0 z-[10000000] pointer-events-none opacity-50"></div>
      <div className="border-t border-current py-3">
        <div className="flex flex-wrap">
          <div className="mr-auto w-auto mb-1 md:mb-0">
            <div className="relative overflow-hidden group">
              <span className="block group-hover:-translate-y-full">&copy; 2022 STUDY Architects</span>
              <span className="block absolute bottom-0 translate-y-full group-hover:translate-y-0">&copy; Studio DiNapoli Yoder</span>
            </div>
          </div>
          
          <div className="md:mr-auto md:text-center md:flex-1 mb-1 md:mb-0 hidden md:block">
            <span className="block">{address}</span>
          </div>

          <div className="ml-auto w-auto">

            <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-block group relative">
              <span className="inline-block md:group-hover:translate-y-[-2px] transition-translate ease-in-out duration-500">Instagram</span>

              <div className="w-full md:w-0 md:group-hover:w-full transition-all delay-75 ease-in-out duration-500 h-[1px] md:h-[2px] md:mb-[2px] bg-current absolute bottom-0 left-0 right-0"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}