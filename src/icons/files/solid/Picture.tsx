import { SVGProps } from "react";
const FlFillPicture = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm-1.25 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-1.864 1.602a.75.75 0 0 0-1.272 0l-2.5 4A.75.75 0 0 0 8 18.25h8a.75.75 0 0 0 .6-1.2l-1.5-2a.75.75 0 0 0-1.2 0l-.844 1.125z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M15.75 2.824c0-.184.193-.301.336-.186q.182.147.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z"
    />
  </svg>
);
export default FlFillPicture;