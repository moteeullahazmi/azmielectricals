type Props = {
  href: string;
  color: "blue" | "green";
  children: React.ReactNode;
};

export default function CTAButton({ href, color, children }: Props) {
  const baseStyle = "px-6 py-3 rounded-lg shadow font-semibold transition transform hover:-translate-y-1";
  const colors = {
    blue: "bg-blue-900 text-white hover:bg-blue-700",
    green: "bg-green-600 text-white hover:bg-green-500",
  };
  return (
    <a href={href} className={`${baseStyle} ${colors[color]}`}>
      {children}
    </a>
  );
}
