import { SVGProps } from "react";
const StInfoTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 11.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.27 3.993c-1.092-1.598-3.448-1.598-4.54 0l-.432.632a76 76 0 0 0-6.944 12.563l-.09.208a2.51 2.51 0 0 0 2.024 3.497 69.4 69.4 0 0 0 15.424 0 2.51 2.51 0 0 0 2.024-3.497l-.09-.208a76 76 0 0 0-6.944-12.563zm-3.302.846a1.25 1.25 0 0 1 2.064 0l.432.632a74.4 74.4 0 0 1 6.806 12.315l.09.208a1.01 1.01 0 0 1-.814 1.408c-5.015.56-10.077.56-15.092 0a1.01 1.01 0 0 1-.815-1.408l.09-.208a74.5 74.5 0 0 1 6.807-12.315z"
      clipRule="evenodd"
    />
  </svg>
);
export default StInfoTriangle;
