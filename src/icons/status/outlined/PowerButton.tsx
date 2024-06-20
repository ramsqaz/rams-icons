import { SVGProps } from "react";
const StPowerButton = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 8.082c0-.183-.19-.302-.348-.212a4.75 4.75 0 1 0 4.696 0c-.159-.09-.348.03-.348.212v1.234c0 .077.036.15.095.199a3.25 3.25 0 1 1-4.19 0A.26.26 0 0 0 10 9.316z"
    />
    <path
      fill="currentColor"
      d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5"
      clipRule="evenodd"
    />
  </svg>
);
export default StPowerButton;
