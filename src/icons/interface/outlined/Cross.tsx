import { SVGProps } from "react";
const InCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8.465 15.535 7.07-7.07M8.465 8.465l7.07 7.07"
    />
  </svg>
);
export default InCross;
