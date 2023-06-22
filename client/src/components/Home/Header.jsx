import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className="container mx-auto flex max-w-5xl items-center justify-between px-8 py-4">
      <h1 className="text-3xl font-bold leading-tight tracking-tight">MockStocks</h1>
      <LoginButton />
    </header>
  );
}
