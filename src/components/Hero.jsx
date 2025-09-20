import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#9bded5] from-brandBlue to-brandIndigo text-black py-48"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="leading-loose text-3xl md:text-7xl font-bold mb-8">
          Welcome To <br /> ITE - Institute for Technical <br /> Education
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
          We deliver web & mobile apps, cloud transformation, training and
          end-to-end IT services that accelerate growth.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-[#56ddc9] text-brandBlack px-7 py-3 rounded-full font-bold shadow"
          >
            Get a Quote
          </a>
          <a
            href="#contact"
            className="font-bold px-5 py-3 rounded-md hover:bg-white/10"
          >
            <div className="flex items-center  gap-2 ">
              Register Now <FaArrowRight />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
