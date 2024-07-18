export default function Header() {
  return (
    <header className="w-full bg-gray-900 p-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Miguel Ureña Dev Portfolio</h1>
        <nav>
          <a href="#about" className="mx-4 transition-colors duration-300 hover:text-blue-300">About</a>
          <a href="#projects" className="mx-4">Projects</a>
          <a href="#contact" className="mx-4">Contact</a>
        </nav>
      </div>
    </header>
  );
}