export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-200 flex flex-col items-center py-12 px-4 text-black">
      {/* タイトル */}
      <h1 className="text-3xl font-bold bg-gray-200 px-8 py-4 rounded shadow mb-8">
        ログイン
      </h1>

      {/* メール表示エリア */}
      <section className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-xl font-semibold mb-4">メール</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>5月15日</div>
          <div>今日はまどかの生理です。言葉に気をつけましょう。</div>
          <div>4月29日</div>
          <div>今日は翔太くんの浮気が発覚しました。衝撃的です。</div>
        </div>
      </section>

      {/* 入力欄風ボタン */}
      <div className="flex flex-col gap-4 mb-8 w-full max-w-sm">
        <div className="bg-gray-200 text-center py-3 rounded-full shadow">
          メールアドレス
        </div>
        <div className="bg-gray-200 text-center py-3 rounded-full shadow">
          パスワード
        </div>
      </div>

      {/* ログインボタン */}
      <button className="bg-gray-200 text-black text-lg font-medium px-8 py-3 rounded-full shadow">
        ログインする
      </button>
    </main>
  );
}
