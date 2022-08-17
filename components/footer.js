export default function Footer({ address, instagram }) {
  return (
    <footer className="px-[20px] relative z-[100] bg-white dark:bg-black overflow-hidden">
      <div className="grain absolute inset-0 z-[10000000] pointer-events-none opacity-50"></div>
      <div className="border-t border-current py-3">
        <div className="md:flex md:flex-wrap">
          <div className="md:mr-auto md:w-auto mb-1 md:mb-0">
            <span className="block">&copy; 2022 STUDY Architects</span>
          </div>
          <div className="md:mr-auto md:text-center md:flex-1 mb-1 md:mb-0">
            <span className="block">{address}</span>
          </div>

          <div className="md:ml-auto w-full md:w-auto">
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="block">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}