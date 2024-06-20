import { SVGProps } from "react";
const GnFillCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.184 4.666 12 4.5l-7.184.166A3.06 3.06 0 0 0 1.87 7.17a26.7 26.7 0 0 0 0 9.66 3.06 3.06 0 0 0 2.945 2.504L12 19.5l7.184-.166a3.06 3.06 0 0 0 2.945-2.504 26.7 26.7 0 0 0 0-9.66 3.06 3.06 0 0 0-2.945-2.504M21 11a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default GnFillCard;
