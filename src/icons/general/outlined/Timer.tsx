import { SVGProps } from "react";
const GnTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 3.018a.75.75 0 1 1 0-1.5h3.536a.75.75 0 0 1 0 1.5zM6.53 3.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M12 5.75A7.25 7.25 0 1 0 19.25 13a.75.75 0 1 1 1.5 0A8.75 8.75 0 1 1 12 4.25a.75.75 0 0 1 0 1.5"
    />
    <path
      fill="currentColor"
      d="M17.188 8.364a.75.75 0 0 0-1.052-1.052l-3.17 2.465-2.072 1.48a1.684 1.684 0 1 0 2.35 2.349l1.479-2.072z"
    />
  </svg>
);
export default GnTimer;
