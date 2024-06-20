import { SVGProps } from "react";
const InFillHotspot = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M12 11.65a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 12.9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7.65a5.25 5.25 0 0 0-3.712 8.962.75.75 0 1 1-1.061 1.06 6.75 6.75 0 1 1 9.546 0 .75.75 0 0 1-1.06-1.06A5.25 5.25 0 0 0 12 7.649"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 3.75a9.15 9.15 0 0 0-6.47 15.62.75.75 0 1 1-1.06 1.06 10.65 10.65 0 1 1 15.06 0 .75.75 0 0 1-1.06-1.06A9.15 9.15 0 0 0 12 3.75"
      clipRule="evenodd"
    />
  </svg>
);
export default InFillHotspot;
