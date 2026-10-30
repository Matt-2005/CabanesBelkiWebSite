const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  prev: <path d="M15 5l-7 7 7 7" />,
  next: <path d="M9 5l7 7-7 7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  up: <path d="M12 19V5M6 11l6-6 6 6" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  pin: (<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  fire: (<><path d="M12 22c4 0 7-2.7 7-6.5 0-3.6-2.6-5.7-4-8.5-.6 2-1.6 3-3 3.5.3-3-1-6-4-8.5.3 3.5-3 6.5-3 10.5C5 19.3 8 22 12 22z" /><path d="M12 22c-1.7 0-3-1.2-3-3 0-1.6 1.3-2.6 2-4 .7 1.4 4 2.4 4 4 0 1.8-1.3 3-3 3z" /></>),
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>),
  leaf: (<><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z" /><path d="M5 19c3-4 6-7 10-9" /></>),
  mountain: (<><path d="m3 20 6.5-11 4 6.5L16 12l5 8z" /><path d="m8 11.5 1.5 1.5 1.5-1.5" /></>),
  home: (<><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></>),
  trees: (<><path d="M8 3 4 10h2.5L3.5 15H12L9 10h2.5z" /><path d="M8 15v6" /><path d="M17 7l-3 5h2l-2.5 4h7L18 12h2z" /><path d="M17 16v5" /></>),
  drop: (<><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /><path d="M4 4l16 16" /></>),
  bulb: (<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></>),
  users: (<><circle cx="9" cy="8" r="3.2" /><circle cx="16.5" cy="9" r="2.6" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M15 14.2c3.1-.6 6 1.7 6 5.8" /></>),
  nosmoke: (<><path d="M3 13h12v3H3z" /><path d="M18 13v3M21 13v3" /><path d="M4 4l16 16" /></>),
  paw: (<><circle cx="6" cy="10" r="1.8" /><circle cx="10" cy="6" r="1.8" /><circle cx="14" cy="6" r="1.8" /><circle cx="18" cy="10" r="1.8" /><path d="M12 11c-3 0-5 3.5-5 6 0 1.7 1.3 2.5 2.7 2.2 1-.2 1.6-.7 2.3-.7s1.3.5 2.3.7c1.4.3 2.7-.5 2.7-2.2 0-2.5-2-6-5-6z" /><path d="M3 3l18 18" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  call: (<><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /><path d="M15 3a6 6 0 0 1 6 6M15 7a2 2 0 0 1 2 2" /></>),
  check: (<><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>),
  alert: (<><path d="M12 3 2 20h20z" /><path d="M12 10v4M12 17.5v.01" /></>),
  snow: (<><path d="M12 2v20M4 7l16 10M20 7 4 17" /><path d="m9 4 3 2 3-2M9 20l3-2 3 2" /></>),
  eye: (<><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>),
  zoom: (<><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5M11 8v6M8 11h6" /></>),
  walk: (<><circle cx="13" cy="4" r="1.8" /><path d="m9 21 2.5-7 3 3V21" /><path d="M7 11.5 9.5 8l3.5-.5 2 3.5 3 1" /><path d="M11.5 14 13 7.5" /></>),
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
};

export type IconName = keyof typeof PATHS;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export function QuoteMark() {
  return (
    <svg className="quote-mark" viewBox="0 0 48 36" fill="currentColor" aria-hidden="true">
      <path d="M0 36V20C0 9 6 2 18 0l2 5C13 7 10 11 10 17h9v19zm28 0V20c0-11 6-18 18-20l2 5c-7 2-10 6-10 12h9v19z" />
    </svg>
  );
}
