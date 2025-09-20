import React from "react";

export default function Clients() {
  const clients = ["Client A", "Client B", "Client C", "Client D"];
  return (
    <section id="clients" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded shadow text-center">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
