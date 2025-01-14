import React from "react";

interface InputTextAreaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  readOnly?: boolean;
  className?: string; 
}

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  placeholder,
  value,
  onChange,
  rows = 3,
  readOnly = false,
  className = "", 
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      readOnly={readOnly}
      className={`p-2 border rounded-lg bg-gray-50 ${className}`} 
      required
    />
  );
};
