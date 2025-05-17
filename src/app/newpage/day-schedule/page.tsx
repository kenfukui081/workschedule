'use client';

export default function ShiftDetail() {
  return (
    <main className="min-h-screen bg-blue-400 px-[60px] py-6 text-black flex flex-col items-center space-y-8">
      {/* 上部ボタン */}
      <div className="w-full flex justify-between max-w-5xl">
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          ログイン
        </button>
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          ログイン
        </button>
      </div>

      {/* 中央メインカード */}
      <section className="bg-cyan-200 w-full max-w-2xl rounded-[40px] px-6 py-8 flex flex-col items-center space-y-4">
        <div className="bg-white rounded-full px-6 py-2 shadow">5月7日</div>
        <div className="bg-white rounded-full px-6 py-2 shadow">必要従業員数　-　3</div>

        {/* 割り当て済みの従業員カード */}
        <div className="w-full bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div>
              <div>佐伯　和樹</div>
              <div className="text-sm text-gray-600">5月のシフト数　-　1<br />希望シフト数　-　4</div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div>
              <div>佐伯　和樹</div>
              <div className="text-sm text-gray-600">5月のシフト数　-　1<br />希望シフト数　-　4</div>
            </div>
          </div>
        </div>

        {/* 赤背景のブロック */}
        <div className="w-full h-16 bg-red-300 rounded-md"></div>
      </section>

      {/* 下部従業員カード（未割り当て） */}
      <div className="w-full max-w-5xl space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-cyan-100 rounded-[40px] px-6 py-4 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <div>佐伯　和樹</div>
                <div className="text-sm text-gray-600">
                  5月のシフト数　-　1<br />
                  希望シフト数　-　4
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
