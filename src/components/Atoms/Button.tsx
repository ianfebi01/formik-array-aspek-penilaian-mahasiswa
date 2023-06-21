import React from "react";

interface IButton {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ label, type, onClick }) => {
  return (
    <button
      type={type}
      className="bg-gray-700 text-white py-1 px-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
