export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
        <p>
          Built with Next.js + Tailwind. Edit <code className="text-gray-700">data/boots.js</code> to add boots.
        </p>
      </div>
    </footer>
  );
}
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10 text-center">
      <p>&copy; 2023 Football Boot Comparison. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
