import { SVGProps } from "react";
const GnAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M3.25 13a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7.25a.75.75 0 0 1 .75.75v4.584l2.648 1.655a.75.75 0 1 1-.796 1.272l-3-1.875A.75.75 0 0 1 11.25 13V8a.75.75 0 0 1 .75-.75M6.53 3.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M17.47 3.47a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default GnAlarm;
