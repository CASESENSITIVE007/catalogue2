export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoMarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary-container)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logoMarkGradient)"
        d="
          M 66 8
          C 56 3, 42 6, 34 16
          C 29 23, 31 30, 39 29
          C 45 28, 50 24, 55 19
          C 58 22, 58 26, 56 31
          L 46 70
          L 34 118
          C 31 128, 26 133, 18 137
          L 25 138
          C 36 134, 45 126, 50 115
          L 62 70
          L 74 24
          C 76 15, 74 10, 66 8
          Z
        "
      />
    </svg>
  );
}
