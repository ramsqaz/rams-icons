import { SVGProps } from "react";
const IcCurTimeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#484848"
      fillRule="evenodd"
      d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17M2 12C2 6.477 6.478 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.522 2 12"
      clipRule="evenodd"
    />
    <path
      fill="#484848"
      fillRule="evenodd"
      d="M11.66 7.096a.75.75 0 0 1 .75.75v4.11l3.793.061a.75.75 0 0 1-.024 1.5l-4.53-.074a.75.75 0 0 1-.738-.75V7.846a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCurTimeCircle;
