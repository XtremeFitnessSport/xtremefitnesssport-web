export function SocialIcon({ label }: { label: string }) {
  if (label === "FB") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  if (label === "IG") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          height="16"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          width="16"
          x="4"
          y="4"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" fill="currentColor" r="1.2" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16.7 5.3c-.92-.6-1.52-1.58-1.66-2.7h-3.02v12.06c0 1.7-1.35 3.08-3.02 3.08a3.05 3.05 0 0 1-3.02-3.08A3.05 3.05 0 0 1 9 11.58c.32 0 .64.05.94.15V8.64A6.27 6.27 0 0 0 9 8.57c-3.34 0-6.05 2.73-6.05 6.09s2.71 6.09 6.05 6.09 6.05-2.73 6.05-6.09V8.61a7.05 7.05 0 0 0 4.13 1.34V6.9a4.08 4.08 0 0 1-2.48-1.6Z" />
    </svg>
  );
}

