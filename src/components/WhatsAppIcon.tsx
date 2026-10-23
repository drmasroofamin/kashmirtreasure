import type { SVGProps } from "react";

export default function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.8A8.5 8.5 0 1 1 20.5 11.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 7.3c.3-.3.7-.2.9.2l.9 1.8c.1.3.1.5-.1.7l-.6.7c.5 1.2 1.5 2.2 2.8 2.8l.8-.7c.2-.2.4-.2.7-.1l1.7.8c.4.2.5.6.3 1-.5 1-1.2 1.4-2.2 1.2-3.2-.5-5.8-3-6.3-6.2-.2-1 .2-1.7 1.1-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
