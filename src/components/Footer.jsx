import React from "react";

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Boniface Muguro — Built with React & Flask
      </div>
    </footer>
  );
}
