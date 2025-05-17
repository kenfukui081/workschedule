'use client';

const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const calendarData = [
  ['', '', '', '', '1', '2', '3'],
  ['4', '5', '6', '7', '8', '9', '10'],
  ['11', '12', '13', '14', '15', '16', '17'],
  ['18', '19', '20', '21', '22', '23', '24'],
  ['25', '26', '27', '28', '29', '30', '31'],
];

// シフト記号を日付に紐づける（仮データ）
const shiftMarks: { [key: string]: string } = {
  '1': '○',
  '2': '×',
  '3': '○',
  '5':'○',
  '4': '○',
  '6': '×',
  '7': '○',
};

export default function PersonalCalendar() {
  return (
    <main className="min-h-screen bg-blue-400 px-[60px] py-6 text-black flex flex-col items-center space-y-6">
      {/* 上部ログインボタン */}
      <div className="w-full flex justify-between max-w-2xl">
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          ログイン
        </button>
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          ログイン
        </button>
      </div>

      {/* 名前表示 */}
      <div className="bg-white rounded-full px-6 py-2 shadow">
        佐伯　和樹
      </div>

      {/* カレンダー枠 */}
      <section className="bg-cyan-200 w-full max-w-md rounded-[40px] px-4 py-6 flex flex-col items-center">
        {/* 曜日ヘッダー */}
        <div className="grid grid-cols-7 w-full text-center font-semibold border border-black">
          {weeks.map((day, i) => (
            <div key={i} className="border border-black py-2">
              {day}
            </div>
          ))}
        </div>

        {/* 日付とシフト記号 */}
        {calendarData.map((week, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 w-full text-center border-x border-black">
            {week.map((date, colIndex) => (
              <div key={colIndex} className="border border-black py-3 h-20 flex flex-col items-center justify-start">
                <div>{date}</div>
                <div className="mt-1">{shiftMarks[date] || ''}</div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
