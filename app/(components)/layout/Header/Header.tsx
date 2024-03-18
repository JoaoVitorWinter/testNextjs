export default function Header() {
  return (
    <header className="flex items-center justify-around bg-gray-50 py-2">
      <h1 className="text-2xl">WeatherWinter</h1>
      <nav>
        <ul className="flex gap-2 text-base text-blue-500 underline">
          <a className="cursor-pointer hover:text-blue-800 hover:decoration-blue-800">
            <li>Famous cities</li>
          </a>
          <a className="cursor-pointer hover:text-blue-800 hover:decoration-blue-800">
            <li>Search yours</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
