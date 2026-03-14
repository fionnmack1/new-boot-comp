
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
