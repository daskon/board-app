import Board from "./components/Board";
import Layout from "./components/layout/Layout";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Layout>
        <Board />
      </Layout>
    </main>
  );
}
