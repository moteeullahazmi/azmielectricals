type Props = { title: string; subtitle?: string };
export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}
