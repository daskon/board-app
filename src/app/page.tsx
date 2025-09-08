import Board from "./components/Board";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">Swimlane Dashboard</h1>
      </header>
      <Board />
    </main>
  );
}
