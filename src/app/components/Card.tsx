import React from "react";
interface CardProps {
  title: string;
  value: string | number;
  growth: string;
  icon: React.ReactNode;
  gradient: string;
}

const Card: React.FC<CardProps> = ({ title, value, growth, icon, gradient }) => {
  return (
    <div
      className={`p-6 rounded-xl text-center text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ${gradient}`}
    >
      <div className="flex items-center justify-center mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm opacity-90 mt-1">{growth}</p>
    </div>
  );
};

export default Card;
