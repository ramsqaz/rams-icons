import { SVGProps } from "react";
const GnFlask = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M10 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.493 3.25H8.5a.75.75 0 1 0 0 1.5h.26v5.087a7.25 7.25 0 0 1-1.256 4.078l-3.093 4.548a1.855 1.855 0 0 0 1.326 2.887c4.162.468 8.364.468 12.526 0a1.855 1.855 0 0 0 1.326-2.887l-3.093-4.548a7.25 7.25 0 0 1-1.256-4.078V4.75h.26a.75.75 0 0 0 0-1.5zM5.905 19.86c4.05.455 8.14.455 12.19 0a.355.355 0 0 0 .254-.553l-3.094-4.549a9 9 0 0 1-.591-1.008H9.336a9 9 0 0 1-.591 1.008L5.65 19.307a.355.355 0 0 0 .254.553m4.015-7.61h4.16a8.8 8.8 0 0 1-.34-2.413V4.75h-3.48v5.087a8.8 8.8 0 0 1-.34 2.413"
      clipRule="evenodd"
    />
  </svg>
);
export default GnFlask;
