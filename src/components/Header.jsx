export default function Header() {
  return (
    <header className="w-full bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="http://iteindia.in/wp-content/uploads/al_opt_content/IMAGE/iteindia.in/wp-content/uploads/2025/07/ITE-LOGO-scaled-100x30.png.bv.webp?bv_host=iteindia.in" />
        </div>

        <nav className="hidden  md:flex gap-6 text-gray-900 items-center">
          <a className="hover:text-brandBlue" href="#home">
            Home
          </a>
          <a className="hover:text-brandBlue" href="#services">
            About
          </a>
          <a className="hover:text-brandBlue" href="#about">
            Certification Courses
          </a>
          <a className="hover:text-brandBlue" href="#clients">
            Placements
          </a>
          <a className="hover:text-brandBlue" href="#contact">
            Student Registration
          </a>
          <a className="hover:text-brandBlue" href="#contact">
            Contact
          </a>
          <div className="w-40 h-10 bg-[#99e3d9] rounded-full flex items-center justify-center text-grey ">
            Demo Class
          </div>
        </nav>
      </div>
    </header>
  );
}
