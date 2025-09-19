"use client";
import Card from "./Card";

export default function DashboardSummary() {
  const summaryData = [
    {
      title: "Posts",
      value: "120",
      growth: "+12% from last month",
      gradient: "bg-gradient-to-br from-[#5D4DEE] to-[#4A3BC7]",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clipRule="evenodd"
          />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 01-2 2H5a2 2 0 01-2-2V9a1 1 0 00-1 1v5.5a1.5 1.5 0 01-3 0V9a2 2 0 012-2h1V5a2 2 0 012-2h8a2 2 0 012 2v2z" />
        </svg>
      ),
    },
    {
      title: "Users",
      value: "80",
      growth: "+8% from last month",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      title: "Comments",
      value: "300",
      growth: "+25% from last month",
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full p-6 bg-white rounded-2xl shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {summaryData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
