import React from "react";

export default function ButtonIcon({ onClick, TitleButton, className, Icon }) {
  return (
    <button onClick={onClick} className={className}>
      {Icon && <Icon className="mr-2" data-testid="button-icon"/>}
      {TitleButton}
    </button>
  );
}
