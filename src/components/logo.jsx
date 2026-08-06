export function Logo(props) {
  return (
    <svg
      viewBox="0 0 236 32"
      role="img"
      aria-label="Portfolio WebCraft"
      {...props}
    >
      <path d="M5 3h22v22H5zM8 6v16h16V6z" />
      <path d="M11 10h10v3H11zM11 15h6v3h-6z" />
      <text x="42" y="21.5" fontSize="17" fontWeight="650">
        Portfolio WebCraft
      </text>
    </svg>
  );
}
