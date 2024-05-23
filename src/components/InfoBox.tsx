import { type ReactNode } from 'react';

// The solution is to use a discriminated union
type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};
// We have a properly typed infobox
// we are accepting a prop that accepts a literal and a union
type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// We want to type an info but also a warning info box
// Based on some prop (conditional rendering)
export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
