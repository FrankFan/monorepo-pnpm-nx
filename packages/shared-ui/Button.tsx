import React from 'react';

export const Button: React.FC = (props: any) => {
  return (
    <button
      className={props.className ?? 'btn'}
      onClick={() => props.onClick()}
      data-bba='ufo'
    >
      {props.children}
    </button>
  );
};
