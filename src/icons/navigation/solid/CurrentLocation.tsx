import { SVGProps } from "react";
const NvFillCurrentLocation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 2a.75.75 0 0 0-1.5 0v1.784a8.25 8.25 0 0 0-7.466 7.466H2a.75.75 0 0 0 0 1.5h1.784a8.25 8.25 0 0 0 7.466 7.466V22a.75.75 0 0 0 1.5 0v-1.784a8.25 8.25 0 0 0 7.466-7.466H22a.75.75 0 0 0 0-1.5h-1.784a8.25 8.25 0 0 0-7.466-7.466zm-4.5 10a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default NvFillCurrentLocation;
