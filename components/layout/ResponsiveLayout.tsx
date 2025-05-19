"use client";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111213] text-white">
      <main className={`container mx-auto px-6 py-8`}>
        <div className="web-view">{children}</div>
      </main>
    </div>
  );
}
