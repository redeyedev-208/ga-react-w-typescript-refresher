import { type ReactNode } from 'react';

// We have a properly typed infobox
// we are accepting a prop that accepts a literal and a union
type InfoBoxProps = {
  mode: 'hint' | 'warning';
  children: ReactNode;
};

// We want to type an info but also a warning info box
// Based on some prop (conditional rendering)
export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className='infobox infobox-warning warning--medium'>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
