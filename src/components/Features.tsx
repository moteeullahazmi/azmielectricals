import SectionTitle from "./SectionTitle";

export default function Features() {
  const features = [
    { title: "Trusted Since 1982", desc: "Over 40 years of reliable service." },
    { title: "High-Quality Products", desc: "Top brands and guaranteed quality." },
    { title: "Wholesale & Retail", desc: "Flexible options for all customers." },
  ];

  return (
    <section className="px-6 py-12 bg-white text-center">
      <SectionTitle title="Why Choose Us?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-900">{f.title}</h3>
            <p className="mt-2 text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
