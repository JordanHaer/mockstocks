export default function Footer() {
  return (
    <div className="bg-slate-700 text-white">
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-2 py-4 sm:flex-row sm:justify-between sm:gap-0 sm:px-8">
        <p className="text-center">&copy; 2023 Jordan Haer</p>
        <ul className="flex justify-center">
          <li className="px-4 underline">Terms of Use</li>
          <li className="border-l border-r border-white px-4 underline">Privacy Policy</li>
          <li className="px-4 underline">Data Policy</li>
        </ul>
      </div>
    </div>
  );
}
