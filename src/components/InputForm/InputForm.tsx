import React from "react";

export default function InputForm({ placeholder, value, onChange,  className = "",  }) {
  return (
    <div className=" w-[100%]">
      <input
        type="text"
        placeholder={placeholder}
        className={` p-2 border border-gray-300 rounded-lg ${className}`}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
