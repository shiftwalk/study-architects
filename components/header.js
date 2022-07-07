import FancyLink from '@/components/fancyLink'

export default function Header() {
  return (
    <header className="py-3 bg-gray-200 md:mb-6 xl:mb-8 px-[20px]">
      <div className="flex flex-wrap">
        <FancyLink destination="/" a11yText="Navigate to the home page" label="Next x Tailwind x Motion" extraClasses="mb-1 md:mb-0" />

        <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" />

          <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" />
        </nav>
      </div>
    </header>
  )
}