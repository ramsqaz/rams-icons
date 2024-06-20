import { SVGProps } from "react";
const StFillAward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 9.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 9.5a7 7 0 1 1 12.923 3.733l2.727 4.722a.75.75 0 0 1-.796 1.11l-2.616-.52-.858 2.526a.75.75 0 0 1-1.36.134l-2.72-4.711a7 7 0 0 1-.6 0l-2.72 4.711a.75.75 0 0 1-1.36-.132l-.861-2.52-2.614.513a.75.75 0 0 1-.795-1.11l2.727-4.723A6.97 6.97 0 0 1 5 9.5m2.086 4.985a7 7 0 0 0 3.027 1.758l-1.607 2.783-.54-1.579a.75.75 0 0 0-.854-.493l-1.637.322zm6.801 1.758 1.605 2.779.537-1.581a.75.75 0 0 1 .856-.495l1.638.326-1.609-2.787a7 7 0 0 1-3.027 1.758M12 6.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
      clipRule="evenodd"
    />
  </svg>
);
export default StFillAward;