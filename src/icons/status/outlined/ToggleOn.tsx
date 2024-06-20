import { SVGProps } from "react";
const StToggleOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 15.5a3.496 3.496 0 0 0 3.464-3.868A3.496 3.496 0 0 0 16 8.5a3.496 3.496 0 0 0-3.464 3.868A3.496 3.496 0 0 0 16 15.5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.926 18.75H8.074a6.75 6.75 0 0 1 0-13.5h7.852a6.75 6.75 0 0 1 0 13.5m0-1.5a5.25 5.25 0 0 0 0-10.5H8.074a5.25 5.25 0 0 0 0 10.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default StToggleOn;
