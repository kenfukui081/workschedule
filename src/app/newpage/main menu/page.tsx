export default function MainMenu() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-200 text-black px-6 py-8 flex flex-col items-center">
        {/* 上部ボタン */}
        <div className="w-full flex justify-start mb-8">
          <button className="bg-gray-200 border border-black px-4 py-2 rounded-full shadow">
            ログイン
          </button>
        </div>
  
        {/* メールカード */}
        <section className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
          <h2 className="text-xl font-semibold mb-4">メール</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>5月15日</div>
            <div>今日はまどかの生理です。言葉に気をつけましょう。</div>
            <div>4月29日</div>
            <div>今日は翔太くんの浮気が発覚しました。衝撃的です。</div>
          </div>
        </section>
  
        {/* シフト提出リスト */}
        <div className="w-full max-w-md space-y-4">
          {[
            { month: '6月分', deadline: '5月20日' },
            { month: '7月分', deadline: '6月20日' },
            { month: '8月分', deadline: '7月20日' },
          ].map((shift, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-full px-6 py-4 flex justify-between items-center shadow"
            >
              <span>{shift.month}　シフト提出</span>
              <span>〆{shift.deadline}</span>
            </div>
          ))}
        </div>
      </main>
    );
  }
  