'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ 追加！

export default function ShiftCalendar() {
  const router = useRouter(); // ✅ 追加！

  const initialRow = ['○', '1', '×', '1', '△', '1'];
  const shiftDataTemplate = Array.from({ length: 10 }, () => ({
    date: '05.07（水）',
    slots: [...initialRow],
  }));

  const symbols = ['○', '×', '△'];

  const [shiftData, setShiftData] = useState(
    shiftDataTemplate.map(row => ({
      date: row.date,
      slots: row.slots.map(s => (symbols.includes(s) ? s : s)),
    }))
  );

  const toggleSymbol = (rowIndex: number, slotIndex: number) => {
    setShiftData(prev => {
      const updated = [...prev];
      const current = updated[rowIndex].slots[slotIndex];
      const currentIndex = symbols.indexOf(current);
      const next = symbols[(currentIndex + 1) % symbols.length];
      updated[rowIndex].slots[slotIndex] = next;
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-blue-400 text-black px-[60px] py-6 flex flex-col items-center">
      {/* 上部ログインボタン */}
      <div className="w-full flex justify-between max-w-5xl mb-6">
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          ログイン
        </button>
        <button className="bg-gray-200 border border-black px-4 py-2 rounded-full">
          ログイン
        </button>
      </div>

      {/* カレンダーリスト */}
      <div className="space-y-4 w-full max-w-5xl">
        {shiftData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="bg-gray-200 rounded-full flex items-center justify-between px-4 py-3 shadow cursor-pointer hover:bg-gray-300 transition"
            onClick={() => router.push('/newpage/day-schedule')} // ✅ 遷移を追加
          >
            <div className="min-w-[90px] font-medium">{row.date}</div>
            <div className="flex gap-4">
              {row.slots.map((slot, slotIndex) => (
                <div
                  key={slotIndex}
                  className="w-8 h-8 bg-white rounded shadow flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ クリックが親に伝播しないようにする
                    if (symbols.includes(slot)) {
                      toggleSymbol(rowIndex, slotIndex);
                    }
                  }}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
