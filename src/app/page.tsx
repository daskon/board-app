import Board from "./components/Board";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold text-gray-800">
          Sport Xi Project
        </h1>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            Create new board +
          </button>
          <SearchBar />
        </div>
      </header>
      <Board />
    </main>
  );
}
