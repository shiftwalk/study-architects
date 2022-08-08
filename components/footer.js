export default function Footer() {
  return (
    <footer className="px-[20px] relative z-[100] bg-white dark:bg-black">
      <div className="border-t border-current py-3">
        <div className="md:flex md:flex-wrap">
          <div className="md:mr-auto md:w-auto mb-1 md:mb-0">
            <span className="block">&copy; 2022 STUDY Architects</span>
          </div>
          <div className="md:mr-auto md:text-center md:flex-1 mb-1 md:mb-0">
            <span className="block">81 Langton Street Unit 11, San Francisco, California 94103</span>
          </div>

          <div className="md:ml-auto w-full md:w-auto">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}