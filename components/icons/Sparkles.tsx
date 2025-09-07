
import React from 'react';

export const Sparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 3-1.9 1.9-1.2-3.1L7 3l-1.9-1.9-3.1 1.2L3 7l-1.9 1.9 1.2 3.1L3 13l1.9 1.9 3.1-1.2L7 17l1.9 1.9 1.2-3.1L13 17l1.9 1.9 3.1-1.2L17 13l1.9-1.9-1.2-3.1L17 7l-1.9-1.9-3.1 1.2Z" />
  </svg>
);
