import { SVGProps } from "react";
const GnChartPie = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 3.784a8.25 8.25 0 1 0 6.669 13.964l-6.39-5.165A.75.75 0 0 1 11.25 12zm1.5 0v7.466h7.466a8.25 8.25 0 0 0-7.466-7.466m7.466 8.966h-6.095l4.741 3.831a8.2 8.2 0 0 0 1.354-3.831M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.7 9.7 0 0 1-2.167 6.13A9.73 9.73 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
  </svg>
);
export default GnChartPie;
