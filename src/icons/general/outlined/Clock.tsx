import { SVGProps } from "react";
const GnClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M4.75 12a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default GnClock;
