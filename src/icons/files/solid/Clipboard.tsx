import { SVGProps } from "react";
const FlFillClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 2.25A2.75 2.75 0 0 0 8.25 5v2c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V5A2.75 2.75 0 0 0 13 2.25zM9.75 5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v1.25h-4.5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.753 5.105c0-.14-.14-.237-.266-.176A3.5 3.5 0 0 0 4.5 8.085v10.49a3.39 3.39 0 0 0 2.972 3.365c3.007.374 6.049.374 9.056 0a3.39 3.39 0 0 0 2.972-3.365V8.085a3.5 3.5 0 0 0-1.983-3.156c-.127-.061-.267.035-.267.175V7A2.25 2.25 0 0 1 15 9.25H9A2.25 2.25 0 0 1 6.75 7z"
    />
  </svg>
);
export default FlFillClipboard;
