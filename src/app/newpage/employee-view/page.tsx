'use client';

export default function EmployeeList() {
  return (
    <main className="min-h-screen bg-blue-500 px-[60px] py-6 text-black flex flex-col items-center space-y-6">
      {/* 上部ボタン */}
      <div className="w-full max-w-5xl flex justify-start">
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          従業員一覧
        </button>
      </div>

      {/* 従業員カード一覧 */}
      <div className="w-full max-w-5xl space-y-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-full px-8 py-6 flex items-center justify-between shadow"
          >
            {/* 左側：アイコンと名前 */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full" />
              <div className="text-lg font-medium">佐伯　和樹</div>
            </div>

            {/* 右側：シフト情報 */}
            <div className="text-sm text-right">
              <div className="flex justify-between gap-8">
                <span>5月のシフト数</span>
                <span>1</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>希望シフト数</span>
                <span>4</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
