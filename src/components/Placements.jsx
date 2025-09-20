import { FaUserShield } from "react-icons/fa";
import { placementData } from "../utils/data";

export default function Placements() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Our Recent Placements
          </h2>
          <p className="text-center">
            Meet our successful graduates who are now thriving in top tech
            companies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {placementData.map((s, i) => (
            <div
              key={i}
              className="flex justify-center gap-5  p-2 rounded-lg shadow hover:shadow-lg transition py-14 border-[#9bded5]  border-l-8 border-l-[#2ebeab] "
            >
              <div className="">
                <FaUserShield size={60} className="text-[#2ebeab]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
