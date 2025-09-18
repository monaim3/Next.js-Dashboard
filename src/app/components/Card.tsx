import React from "react";

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white dark:bg-slate-800 shadow-sm rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
