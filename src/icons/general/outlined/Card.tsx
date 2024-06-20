import { SVGProps } from "react";
const GnCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.184 4.912 12 4.75l-7.184.162a2.81 2.81 0 0 0-2.699 2.3 26.5 26.5 0 0 0 0 9.575 2.81 2.81 0 0 0 2.7 2.3L12 19.25l7.184-.162a2.81 2.81 0 0 0 2.699-2.3c.582-3.166.582-6.41 0-9.575a2.81 2.81 0 0 0-2.7-2.3M4.85 6.412 12 6.25l7.15.162c.62.014 1.145.461 1.258 1.072q.23 1.252.33 2.516H3.262q.101-1.264.332-2.516A1.31 1.31 0 0 1 4.85 6.412M3.181 12c0 1.512.137 3.023.412 4.516.112.61.637 1.058 1.257 1.072l7.15.162 7.15-.162a1.31 1.31 0 0 0 1.258-1.072c.274-1.493.411-3.004.411-4.516z"
      clipRule="evenodd"
    />
  </svg>
);
export default GnCard;
