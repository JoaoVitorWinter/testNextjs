import A from "../../A";

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-gray-50 h-[10vh]">
      <h1 className="text-2xl">WeatherWinter</h1>
      <nav>
        <ul className="flex gap-2 text-base text-blue-500 underline">
            <li><A href={"/"}>Famous cities</A></li>
            <li><A href={"/"}>Search yours</A></li>
        </ul>
      </nav>
    </header>
  );
}
