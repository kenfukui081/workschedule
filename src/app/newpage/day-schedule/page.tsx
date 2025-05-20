'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Member = {
  id: number;
  name: string;
  shiftCount: number;
  desiredShift: number;
};

const sampleMember: Member = {
  id: 0,
  name: '佐伯 和樹',
  shiftCount: 1,
  desiredShift: 4,
};

export default function ShiftDetail() {
  const router = useRouter();

  const [assigned, setAssigned] = useState<Member[]>([
    { ...sampleMember, id: 1 },
  ]);
  const [unassigned, setUnassigned] = useState<Member[]>([
    { ...sampleMember, id: 2 },
    { ...sampleMember, id: 3 },
    { ...sampleMember, id: 4 },
  ]);

  const [draggedMember, setDraggedMember] = useState<Member | null>(null);

  const handleDropToAssigned = () => {
    if (!draggedMember) return;
    if (!assigned.find((m) => m.id === draggedMember.id)) {
      setAssigned((prev) => [...prev, draggedMember]);
      setUnassigned((prev) => prev.filter((m) => m.id !== draggedMember.id));
    }
    setDraggedMember(null);
  };

  const handleDropToUnassigned = () => {
    if (!draggedMember) return;
    if (!unassigned.find((m) => m.id === draggedMember.id)) {
      setUnassigned((prev) => [...prev, draggedMember]);
      setAssigned((prev) => prev.filter((m) => m.id !== draggedMember.id));
    }
    setDraggedMember(null);
  };

  return (
    <main className="min-h-screen bg-blue-400 px-[60px] py-6 text-black flex flex-col items-center space-y-8">
      {/* 上部ボタン */}
      <div className="w-full flex justify-between max-w-5xl">
        <button
          onClick={() => router.back()}
          className="bg-gray-200 border border-black px-4 py-2 rounded-full"
        >
          戻る
        </button>
        <button
          onClick={() => router.push('/newpage/schedule')}
          className="bg-gray-200 border border-black px-4 py-2 rounded-full"
        >
          確定
        </button>
      </div>

      {/* 割り当て済みメンバー */}
      <section
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDropToAssigned}
        className="bg-cyan-200 w-full max-w-2xl rounded-[40px] px-6 py-8 flex flex-col items-center space-y-4"
      >
        <div className="bg-white rounded-full px-6 py-2 shadow">5月7日</div>
        <div className="bg-white rounded-full px-6 py-2 shadow">必要従業員数　-　3</div>

        <div className="w-full space-y-4">
          {assigned.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onDragStart={() => setDraggedMember(member)}
            />
          ))}
        </div>

        <div className="w-full h-16 bg-red-300 rounded-md" />
      </section>

      {/* 未割り当てメンバー */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDropToUnassigned}
        className="w-full max-w-5xl space-y-4"
      >
        {unassigned.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onDragStart={() => setDraggedMember(member)}
          />
        ))}
      </div>
    </main>
  );
}

function MemberCard({
  member,
  onDragStart,
}: {
  member: Member;
  onDragStart: () => void;
}) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="bg-white rounded-lg shadow p-4 flex items-center justify-between cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div>
          <div>{member.name}</div>
          <div className="text-sm text-gray-600">
            5月のシフト数　-　{member.shiftCount}
            <br />
            希望シフト数　-　{member.desiredShift}
          </div>
        </div>
      </div>
    </div>
  );
}
