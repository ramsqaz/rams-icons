import { SVGProps } from "react";
const NvFillGlobe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.955 3.106a.75.75 0 0 0-1.06-1.06l-.708.706A1.27 1.27 0 0 0 17.15 4.5a8.25 8.25 0 0 1-6.146 13.75h-.006c-1.968 0-3.935-.7-5.497-2.1a1.27 1.27 0 0 0-1.748.037l-.707.707a.75.75 0 1 0 1.06 1.061l.551-.55a9.7 9.7 0 0 0 5.594 2.316v1.53H8.5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-1.53a9.7 9.7 0 0 0 6.144-2.827c3.63-3.629 3.8-9.407.51-13.238z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 10a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M13 6.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M6.25 12.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default NvFillGlobe;
