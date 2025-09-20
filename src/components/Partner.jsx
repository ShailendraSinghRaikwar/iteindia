import { partners } from "../utils/data";

export default function Partner() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Premium Partners
        </h3>
        <div className="flex items-center justify-center gap-6 flex-nowrap ">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex items-center w-64 h-44 bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img src={p.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
