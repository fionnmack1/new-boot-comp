export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <h1 className="text-lg font-semibold tracking-tight">Boot Compare</h1>
        <nav className="text-sm text-gray-600">
          <a className="hover:text-black" href="/">Home</a>
          <span className="mx-2 text-gray-300">|</span>
          <a className="hover:text-black" href="/boots">All boots</a>
        </nav>
      </div>
    </header>
  );
} const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-xl">Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Boots</li>
          <li>Compare</li>
          <li>Reviews</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
