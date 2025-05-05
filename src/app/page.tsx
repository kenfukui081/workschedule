
export default function Home() {
  const users = ["田中 太郎", "佐藤 花子", "山本 次郎"];

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">シフト管理アプリ</h1>

      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">従業員一覧</h2>
        <ul className="space-y-2">
          {users.map((name, index) => (
            <li key={index} className="p-3 border rounded">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
        シフトを追加
      </button>
    </main>
  );
}
