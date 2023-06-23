export default function Footer() {
  return (
    <div className="bg-slate-700 text-white">
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-2 py-4 sm:flex-row sm:justify-between sm:gap-0 sm:px-8">
        <p className="text-center">&copy; 2023 Jordan Haer</p>
        <ul className="flex justify-center">
          <li className="px-4 hover:underline">
            <a href="https://github.com/JordanHaer" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li className="border-l border-white px-4 hover:underline">
            <a href="https://linkedin.com/in/JordanHaer" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
