import SectionTitle from "./SectionTitle";

export default function ProductsGrid() {
  const products = [
    { name: "Wires & Cables", desc: "High-quality electrical wires and cables." },
    { name: "Switches & Boards", desc: "Modern and durable switches, sockets, and boards." },
    { name: "Lighting Solutions", desc: "LED bulbs, tube lights, and fittings." },
  ];

  return (
    <section className="px-6 py-12 bg-white text-center">
      <SectionTitle title="Our Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((p, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl">{p.name}</h3>
            <p className="mt-2 text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
