export default function SectionTitle({ title }) {
  return (
    <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-green-800 via-emerald-800 to-teal-900 text-transparent bg-clip-text drop-shadow-md tracking-tight text-center">
      {title}
    </h2>
  );
}
